/**
 * source: LYGIA Shader Library
 * author: Patricio Gonzalez Vivo
 * description: pass a value and get some random normalize value between 0 and 1
 * Use sin-less random, which tolerates bigger values before producing pattern. 
 * From https://www.shadertoy.com/view/4djSRW
*/
const glslRandom = `
float random(float x) {
  x = fract(x * 443.897);
  x *= x + 33.33;
  x *= x + x;
  return fract(x);
}
`;

export default glslRandom;