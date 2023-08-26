import { useRef, useEffect } from 'react'

import glslCurlNoise from '../../shaders/glslCurlNoise'
import glslSimplexNoise from '../../shaders/glslSimplexNoise'

import { 
  SIZE,
  INIT_VELOCITIES_FLOAT_ARR,
  INIT_POSITIONS_FLOAT_ARR 
} from '../../utils/utils'

import * as webglUtils from '../../utils/webgl-utils'

var m4 = {
  orthographic: function(left, right, bottom, top, near, far) {
    return [
      2 / (right - left), 0, 0, 0,
      0, 2 / (top - bottom), 0, 0,
      0, 0, 2 / (near - far), 0,
 
      (left + right) / (left - right),
      (bottom + top) / (bottom - top),
      (near + far) / (near - far),
      1,
    ];
  }
}

/**
 * This is the React version of particle system simulation
 * based on the WebGL GPU computation rendering feature.
 * 
 * For more details, check out tutorials on WebGL Fundamentals website.
 * 
 * @see https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html
 * @returns {JSX.Element} HTMLCanvasElement that contains
 */
export default function Scene() {
  const canvasRef = useRef(null);

  const updateVelocityVS = `
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `;

  const updateVelocityFS = `
  precision highp float;

  uniform sampler2D positionTex;
  uniform sampler2D velocityTex;
  uniform vec2 texDimensions;
  uniform vec2 canvasDimensions;
  uniform float deltaTime;
  uniform float elapsedTime;

  ${glslCurlNoise}
  
  void main() {
    // compute texcoord from gl_FragCoord;
    vec2 texcoord = gl_FragCoord.xy / texDimensions;

    vec3 position = texture2D(positionTex, texcoord).xyz;
    vec3 velocity = texture2D(velocityTex, texcoord).xyz;
    
    vec3 newVelocity = 10.0 * curlNoise(position*0.03);
    gl_FragColor = vec4(newVelocity, 1);
  }
  `;

  const updatePositionVS = `
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `;

  const updatePositionFS = `
  precision highp float;

  uniform sampler2D positionTex;
  uniform sampler2D velocityTex;
  uniform vec2 texDimensions;
  uniform vec2 canvasDimensions;
  uniform float deltaTime;
  uniform float elapsedTime;

  ${glslSimplexNoise}

  void main() {
    // there will be one velocity per position
    // so the velocity texture and position texture
    // are the same size.

    // further, we're generating new positions
    // so we know our destination is the same size
    // as our source so we only need one set of 
    // shared texture dimensions

    // compute texcoord from gl_FragCoord;
    vec2 texcoord = gl_FragCoord.xy / texDimensions;
    
    vec3 position = texture2D(positionTex, texcoord).xyz;
    vec3 velocity = texture2D(velocityTex, texcoord).xyz;

    float lifetime = texture2D(positionTex, texcoord).a;
    
    float dist = distance(position, vec3(-20,0,0));
    if(dist > 50.0 || lifetime > 20.0){
      vec3 newPosition = snoise3(vec4(position, elapsedTime))*10.0;
      gl_FragColor = vec4(newPosition, 0);
    } else {
      vec3 newPosition = position + velocity*deltaTime;
      gl_FragColor = vec4(newPosition, lifetime+deltaTime);
    }
  }
  `;

  const drawParticlesVS = `
  attribute float id;
  uniform sampler2D positionTex;
  uniform vec2 texDimensions;
  uniform mat4 matrix;

  vec4 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord);
  }

  void main() {
    // pull the position from the texture
    vec4 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // do the common matrix math
    gl_Position = matrix * vec4(position.xyz, 1);
    gl_PointSize = 1.0;
  }
  `;

  const drawParticlesFS = `
  precision highp float;
  void main() {
    // vec3 color = vec3(0.72, 0.37, 0.96);
    vec3 color = vec3(0.37, 0.56, 0.96);
    gl_FragColor = vec4(color, 1);
  }
  `;

  useEffect(() => {
    // All this code will be executed 
    // after the canvas element is generated.
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    let animationFrameId; // Frame id for cleanup later

    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) {
      return;
    }
    // Check we can use floating point textures
    const ext1 = gl.getExtension('OES_texture_float');
    if (!ext1) {
      alert('Need OES_texture_float');
      return;
    }
    // Check we can render to floating point textures
    const ext2 = gl.getExtension('WEBGL_color_buffer_float');
    if (!ext2) {
      alert('Need WEBGL_color_buffer_float');
      return;
    }
    // Check we can use textures in a vertex shader
    if (gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS) < 1) {
      alert('Can not use textures in vertex shaders');
      return;
    }

    // Create programs
    const updateVelocityVertexShader = webglUtils.compileShader(gl, updateVelocityVS, 'vs');
    const updateVelocityFragementShader = webglUtils.compileShader(gl, updateVelocityFS, 'fs');
    const updateVelocityProgram = webglUtils.createProgram(
      gl, updateVelocityVertexShader, updateVelocityFragementShader);

    const updatePositionVertexShader = webglUtils.compileShader(gl, updatePositionVS, 'vs');
    const updatePositionFragmentShader = webglUtils.compileShader(gl, updatePositionFS, 'fs');
    const updatePositionProgram = webglUtils.createProgram(
        gl, updatePositionVertexShader, updatePositionFragmentShader);
    
    const drawParticlesVertexShader = webglUtils.compileShader(gl, drawParticlesVS, 'vs');
    const drawParticlesFragmentShader = webglUtils.compileShader(gl, drawParticlesFS, 'fs');
    const drawParticlesProgram = webglUtils.createProgram(
        gl, drawParticlesVertexShader, drawParticlesFragmentShader);

    // Setup variable locations
    const updateVelocityPrgLocs = {
      position: gl.getAttribLocation(updateVelocityProgram, 'position'),
      positionTex: gl.getUniformLocation(updateVelocityProgram, 'positionTex'),
      velocityTex: gl.getUniformLocation(updateVelocityProgram, 'velocityTex'),
      texDimensions: gl.getUniformLocation(updateVelocityProgram, 'texDimensions'),
      canvasDimensions: gl.getUniformLocation(updateVelocityProgram, 'canvasDimensions'),
      deltaTime: gl.getUniformLocation(updateVelocityProgram, 'deltaTime'),
      elapsedTime: gl.getUniformLocation(updateVelocityProgram, 'elapsedTime'),
    }

    const updatePositionPrgLocs = {
      position: gl.getAttribLocation(updatePositionProgram, 'position'),
      positionTex: gl.getUniformLocation(updatePositionProgram, 'positionTex'),
      velocityTex: gl.getUniformLocation(updatePositionProgram, 'velocityTex'),
      texDimensions: gl.getUniformLocation(updatePositionProgram, 'texDimensions'),
      canvasDimensions: gl.getUniformLocation(updatePositionProgram, 'canvasDimensions'),
      deltaTime: gl.getUniformLocation(updatePositionProgram, 'deltaTime'),
      elapsedTime: gl.getUniformLocation(updateVelocityProgram, 'elapsedTime'),
    };

    const drawParticlesProgLocs = {
      id: gl.getAttribLocation(drawParticlesProgram, 'id'),
      positionTex: gl.getUniformLocation(drawParticlesProgram, 'positionTex'),
      texDimensions: gl.getUniformLocation(drawParticlesProgram, 'texDimensions'),
      matrix: gl.getUniformLocation(drawParticlesProgram, 'matrix'),
    };

    // Setup a full canvas clip space quad
    const updateVelocityBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, updateVelocityBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
      1, -1,
      -1,  1,
      -1,  1,
      1, -1,
      1,  1,
    ]), gl.STATIC_DRAW);

    // setup a full canvas clip space quad
    const updatePositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, updatePositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
      1, -1,
      -1,  1,
      -1,  1,
      1, -1,
      1,  1,
    ]), gl.STATIC_DRAW);

    // Setup an id buffer
    const particleTexWidth = SIZE;
    const particleTexHeight = SIZE;
    const numParticles = particleTexWidth * particleTexHeight;
    const ids = new Array(numParticles).fill(0).map((_, i) => i);
    const idBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ids), gl.STATIC_DRAW);

    // we're going to base the initial positions on the size
    // of the canvas so lets update the size of the canvas
    // to the initial size we want
    webglUtils.resizeCanvasToDisplaySize(canvas);

    function createTexture(gl, data, width, height) {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(
          gl.TEXTURE_2D,
          0,        // mip level
          gl.RGBA,  // internal format
          width,
          height,
          0,        // border
          gl.RGBA,  // format
          gl.FLOAT, // type
          data,
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      return tex;
    }

    // create a texture for the velocity and 2 textures for the positions.
    const velocityTex1 = createTexture(gl, INIT_VELOCITIES_FLOAT_ARR, particleTexWidth, particleTexHeight);
    const velocityTex2 = createTexture(gl, null, particleTexWidth, particleTexHeight);
    const positionTex1 = createTexture(gl, INIT_POSITIONS_FLOAT_ARR, particleTexWidth, particleTexHeight);
    const positionTex2 = createTexture(gl, null, particleTexWidth, particleTexHeight);

    function createFramebuffer(gl, tex) {
      const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      return fb;
    }

    // create 2 framebuffers. One that renders to positionTex1 one
    // and another that renders to positionTex2

    const velocitiesFB1 = createFramebuffer(gl, velocityTex1);
    const velocitiesFB2 = createFramebuffer(gl, velocityTex2);

    let oldVelocitiesInfo = {
      fb: velocitiesFB1,
      tex: velocityTex1,
    };
    let newVelocitiesInfo = {
      fb: velocitiesFB2,
      tex: velocityTex2,
    };

    const positionsFB1 = createFramebuffer(gl, positionTex1);
    const positionsFB2 = createFramebuffer(gl, positionTex2);

    let oldPositionsInfo = {
      fb: positionsFB1,
      tex: positionTex1,
    };
    let newPositionsInfo = {
      fb: positionsFB2,
      tex: positionTex2,
    };

    let then = 0;
    function render(time) {
      // convert to seconds
      time *= 0.001;
      // Subtract the previous time from the current time
      const deltaTime = time - then;
      // Remember the current time for the next frame.
      then = time;

      if (!canvas || !gl) return;

      webglUtils.resizeCanvasToDisplaySize(canvas);

      // render to the new velocities
      gl.bindFramebuffer(gl.FRAMEBUFFER, newVelocitiesInfo.fb);
      gl.viewport(0, 0, particleTexWidth, particleTexHeight);

      // setup our attributes to tell WebGL how to pull
      // the data from the buffer above to the position attribute
      // this buffer just contains a -1 to +1 quad for rendering
      // to every pixel
      gl.bindBuffer(gl.ARRAY_BUFFER, updateVelocityBuffer);
      gl.enableVertexAttribArray(updateVelocityPrgLocs.position);
      gl.vertexAttribPointer(
          updateVelocityPrgLocs.position,
          2,         // size (num components)
          gl.FLOAT,  // type of data in buffer
          false,     // normalize
          0,         // stride (0 = auto)
          0,         // offset
      );

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, oldPositionsInfo.tex);
      gl.activeTexture(gl.TEXTURE0 + 1);
      gl.bindTexture(gl.TEXTURE_2D, oldVelocitiesInfo.tex);

      gl.useProgram(updateVelocityProgram);
      gl.uniform1i(updateVelocityPrgLocs.positionTex, 0);  // tell the shader the position texture is on texture unit 0
      gl.uniform1i(updateVelocityPrgLocs.velocityTex, 1);  // tell the shader the position texture is on texture unit 1
      gl.uniform2f(updateVelocityPrgLocs.texDimensions, particleTexWidth, particleTexHeight);
      gl.uniform2f(updateVelocityPrgLocs.canvasDimensions, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(updateVelocityPrgLocs.deltaTime, deltaTime);
      gl.uniform1f(updateVelocityPrgLocs.elapsedTime, then);

      gl.drawArrays(gl.TRIANGLES, 0, 6);  // draw 2 triangles (6 vertices)

      // render to the new positions
      gl.bindFramebuffer(gl.FRAMEBUFFER, newPositionsInfo.fb);
      gl.viewport(0, 0, particleTexWidth, particleTexHeight);

      // setup our attributes to tell WebGL how to pull
      // the data from the buffer above to the position attribute
      // this buffer just contains a -1 to +1 quad for rendering
      // to every pixel
      gl.bindBuffer(gl.ARRAY_BUFFER, updatePositionBuffer);
      gl.enableVertexAttribArray(updatePositionPrgLocs.position);
      gl.vertexAttribPointer(
          updatePositionPrgLocs.position,
          2,         // size (num components)
          gl.FLOAT,  // type of data in buffer
          false,     // normalize
          0,         // stride (0 = auto)
          0,         // offset
      );

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, oldPositionsInfo.tex);
      gl.activeTexture(gl.TEXTURE0 + 1);
      gl.bindTexture(gl.TEXTURE_2D, newVelocitiesInfo.tex);

      gl.useProgram(updatePositionProgram);
      gl.uniform1i(updatePositionPrgLocs.positionTex, 0);  // tell the shader the position texture is on texture unit 0
      gl.uniform1i(updatePositionPrgLocs.velocityTex, 1);  // tell the shader the position texture is on texture unit 1
      gl.uniform2f(updatePositionPrgLocs.texDimensions, particleTexWidth, particleTexHeight);
      gl.uniform2f(updatePositionPrgLocs.canvasDimensions, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(updatePositionPrgLocs.deltaTime, deltaTime);

      gl.drawArrays(gl.TRIANGLES, 0, 6);  // draw 2 triangles (6 vertices)

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      // setup our attributes to tell WebGL how to pull
      // the data from the buffer above to the id attribute
      gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
      gl.enableVertexAttribArray(drawParticlesProgLocs.id);
      gl.vertexAttribPointer(
          drawParticlesProgLocs.id,
          1,         // size (num components)
          gl.FLOAT,  // type of data in buffer
          false,     // normalize
          0,         // stride (0 = auto)
          0,         // offset
      );

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, newPositionsInfo.tex);

      gl.useProgram(drawParticlesProgram);
      gl.uniform2f(drawParticlesProgLocs.texDimensions, particleTexWidth, particleTexWidth);
      gl.uniform1i(drawParticlesProgLocs.positionTex, 0);  // tell the shader the position texture is on texture unit 0
      gl.uniformMatrix4fv(
          drawParticlesProgLocs.matrix,
          false,
          m4.orthographic(
            -70,   // left
            30,    // right
            -50,  // bottom
            50,   // top
            -50,                 // near
            50,                  // far
          ));

      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
      gl.blendEquation(gl.FUNC_ADD);

      gl.drawArrays(gl.POINTS, 0, numParticles);
      gl.disable(gl.BLEND)

      // swap which texture we will read from
      // and which one we will write to
      {
        const tempVelocitiesInfo = oldVelocitiesInfo;
        oldVelocitiesInfo = newVelocitiesInfo;
        newVelocitiesInfo = tempVelocitiesInfo;

        const tempPositionsInfo = oldPositionsInfo;
        oldPositionsInfo = newPositionsInfo;
        newPositionsInfo = tempPositionsInfo;
      }

      animationFrameId = requestAnimationFrame(render);
    }

    // Start the animation
    animationFrameId = requestAnimationFrame(render);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef}>

      </canvas>
    </>
  )
}