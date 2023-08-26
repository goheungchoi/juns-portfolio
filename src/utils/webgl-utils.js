// webgl-utils.js

/**
 * Creates and compiles a shader.
 * 
 * @param {!WebGLRenderingContext} gl The WebGL Context.
 * @param {string} shaderSource The GLSL source code for the shader.
 * @param {string} shaderType The type of shader, VERTEX_SHADER or FRAGMENT_SHADER.
 * 
 * @returns {!WebGLShader} The shader.
 * 
 * @see https://webgl2fundamentals.org/webgl/lessons/webgl-boilerplate.html
 */
export function compileShader(gl, shaderSource, shaderType) {
  // Check the type of the shader
  let typenum;
  const type_input = shaderType.toUpperCase();
  if (  // Vertex Shader
    type_input === 'VS' ||
    type_input === 'VERT' ||
    type_input === 'VERTEX' ||
    type_input === 'VERTEX_SHADER'
  )
    typenum = WebGLRenderingContext.VERTEX_SHADER;
  else if ( // Fragment Shader
    type_input === 'FS' ||
    type_input === 'FRAG' ||
    type_input === 'FRAGMENT' ||
    type_input === 'FRAGMENT_SHADER'
  )
    typenum = WebGLRenderingContext.FRAGMENT_SHADER;
  else // Shader Type
    typenum = WebGLRenderingContext.SHADER_TYPE;

  // Create the shader object
  const shader = gl.createShader(typenum);
  if (!shader) {
    throw new Error("Wrong type of shader!");
  }

  // Set the shader source code.
  gl.shaderSource(shader, shaderSource);

  // Compile the shader
  gl.compileShader(shader);

  // Check if it compiled
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    throw new Error("Could not compile shader:" + gl.getShaderInfoLog(shader));
  }

  return shader;
}

/**
 * Creates a program from a vertex shader 
 * and fragmentShader.
 * 
 * @param {!WebGLRenderingContext} gl The WebGL context.
 * @param {!WebGLShader} vertexShader A vertex shader.
 * @param {!WebGLShader} fragmentShader A fragment shader.
 * @return {!WebGLProgram} The program.
 * @see https://webgl2fundamentals.org/webgl/lessons/webgl-boilerplate.html
 */
export function createProgram(gl,vertexShader,fragmentShader,) {
  // Create a program
  const program = gl.createProgram();
  if (!program) {
    throw new Error("Could not create a program!");
  }

  // Attach the shaders.
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  // Link the program.
  gl.linkProgram(program);

  // Check if it linked.
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    throw new Error("Program failed to link:" + gl.getProgramInfoLog(program));
  }

  return program;
}

/**
 * Creates an array buffer object.
 * 
 * @param {!WebGLRenderingContext} gl The WebGL context.
 * @param {BufferSource|null} data The buffer source.
 * @param {number} usage The usage number.
 * @returns {WebGLBuffer} The buffer.
 */
export function makeArrayBuffer(gl, data, usage) {
  const buf = gl.createBuffer();
  if (!buf) {
    throw new Error("Could not create a array buffer!");
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, data, usage);
  return buf;
}

/**
 * Creates a vertex array object and binds
 * the references to the vertex buffers.
 * 
 * @param {!WebGLRenderingContext} gl The WebGL context.
 * @param {Array<[WebGLBuffer, GLuint]>} bufferLocationPairs The array of buffer and location pairs
 * @returns {WebGLVertexArrayObject} The VAO
 */
export function makeVertexArrayObject(gl, bufferLocationPairs) {
  const vao = gl.createVertexArray();
  if (!vao) {
    throw new Error("Could not create a buffer!");
  }
  gl.bindVertexArray(vao);
  for (const [buf, loc] of bufferLocationPairs) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(
      loc,      // attribute location
      3,        // number of elements
      gl.FLOAT, // type of data
      false,    // normalize
      0,        // stride (0 = auto)
      0,        // offset
    )
  }
  return vao;
}


export function makeTransformFeedback(gl,buffers) {
  const tf = gl.createTransformFeedback();
  if (!tf) {
    throw new Error("Could not create a transform feedback!");
  }
  gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
  let index = 0;
  for (const buffer of buffers) {
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, index++, buffer);
  }
  return tf;
}

/**
 * Resize a canvas to match the size its displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number|undefined} [multiplier] amount to multiply by.
 *    Pass in window.devicePixelRatio for native pixels.
 * @return {boolean} true if the canvas was resized.
 * @memberOf module:webgl-utils
 */
export function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  const width  = canvas.clientWidth  * multiplier | 0;
  const height = canvas.clientHeight * multiplier | 0;
  if (canvas.width !== width ||  canvas.height !== height) {
    canvas.width  = width;
    canvas.height = height;
    return true;
  }
  return false;
}

export function createDataTexture(gl, data, width, height) {
  const tex = gl.createTexture();
  if (!tex) {
    throw new Error("Could not create a texture!");
  }
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,        // mip lebel
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
  gl.bindTexture(gl.TEXTURE_2D, null);
  return tex;
}

export function createFrameBuffer(gl, tex) {
  const fb = gl.createFramebuffer();
  if (!fb) {
    throw new Error("Could not create a framebuffer!");
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER, 
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    tex,
    0,
  );
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return fb;
}