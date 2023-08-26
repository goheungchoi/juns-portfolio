import * as THREE from 'three';

// Constants
export const SIZE = 128;
export const MAX_T = 100.0;
export const ORIGIN = new Float32Array([0.0, 0.0, 0.0]);

// Helper functions
export function getRandomVelocities(width, height) {
  const length = width*height*4;
  const data = new Float32Array(length);

  for (let i = 0; i < length; i++) {
    const stride = i * 4;

    const velocity = Math.sqrt(Math.random()) * 10.0 + 2.0;
    const theta = THREE.MathUtils.randFloatSpread(360); 
    const phi = THREE.MathUtils.randFloatSpread(360); 

    data[stride + 0] =  velocity * Math.sin(theta) * Math.cos(phi);
    data[stride + 1] =  velocity * Math.sin(theta) * Math.sin(phi);
    data[stride + 2] =  velocity * Math.cos(theta);
    data[stride + 3] =  1.0; // this value doesn't affect
  }
  return data;
}

export function getRandomPositions(width, height) {
  const length = width*height*4;
  const data = new Float32Array(length);

  for (let i = 0; i < length; i++) {
    const stride = i * 4;

    const distance = Math.sqrt(Math.random()) * 2.0;
    const theta = THREE.MathUtils.randFloatSpread(360); 
    const phi = THREE.MathUtils.randFloatSpread(360); 

    data[stride + 0] = ORIGIN[0] + distance * Math.sin(theta) * Math.cos(phi)
    data[stride + 1] = ORIGIN[1] + distance * Math.sin(theta) * Math.sin(phi);
    data[stride + 2] = ORIGIN[2] + distance * Math.cos(theta);
    data[stride + 3] = THREE.MathUtils.randFloatSpread(20.0); // lifespan
  }
  return data;
}

export const INIT_VELOCITIES_FLOAT_ARR = getRandomVelocities(SIZE, SIZE);
export const INIT_POSITIONS_FLOAT_ARR = getRandomPositions(SIZE, SIZE);
