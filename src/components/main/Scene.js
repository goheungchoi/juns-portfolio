import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { useState, useEffect, useRef } from 'react'
import { motion, MotionConfig } from "framer-motion-3d"
import { TextureLoader } from 'three'
import flyThroughCamera from '../../data/Demo Project.theatre-project-state.json'

import { editable as e, getProject, val } from '@theatre/core'
import { SheetProvider, useCurrentSheet, PerspectiveCamera } from '@theatre/r3f'

const demoSheet = getProject('Demo Project', {state: flyThroughCamera}).sheet('Demo Sheet');

const playheadIntervals = {
  home: [0, 0],
  about: [0, 1],
  work: [1, 2],
  contact: [2, 3],
}

function Meshes() {
  const sheet = useCurrentSheet();

  const disc = useLoader(TextureLoader, 'disc.png');
  const pointsRef = useRef(null);
  const meshRef = useRef(null);

  useFrame(({ clock, camera }) => {
    if (!pointsRef || !meshRef) return;
    meshRef.current.rotation.y = -clock.getElapsedTime()/100;
    pointsRef.current.rotation.y = -clock.getElapsedTime()/100;

    meshRef.current.rotation.x = clock.getElapsedTime()/500;
    pointsRef.current.rotation.x = clock.getElapsedTime()/500;

    if (sheet.sequence.position < 3) {
      sheet.sequence.position += 0.01;
    }
    console.log(sheet.sequence.position);
  });

  return (
    <>
      <points ref={pointsRef}>
        <icosahedronGeometry 
          args={[30, 3]}
        />
        <pointsMaterial 
          color="#372925" 
          size={1} 
          sizeAttenuation={true}
          map={disc}
          alphaTest={0.5}
          transparent
        />
      </points>
      <mesh ref={meshRef}>
        <icosahedronGeometry 
          args={[30, 3]}
        />
        <meshStandardMaterial 
          color='gray'
          depthTest
          depthWrite
          wireframe
        />
      </mesh>

      <mesh 
        position={[-50, 20, 0]}
      >
        <boxGeometry 
          args={[10, 10, 10]}
        />
        <meshStandardMaterial 
          color='hotpink'
        />
      </mesh>
    </>
      
      
  )
}

function BackgroundScene() {
  
  return (
    <Canvas>
      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera  
          theatreKey='Camera'
          makeDefault 
          fov={45} 
          aspect={window.innerWidth/window.innerHeight}
          near={0.1}
          far={150}
          position={[-30, 0, 100]}
        />
        <pointLight position={[30, 0, -100]} />
        <pointLight position={[-50, 0, -30]} />
        <ambientLight color={'white'} />
        <color attach="background" args={["#ECE6E4"]} />
        <Meshes />
      </ SheetProvider>
    </Canvas>
  )
}

export default BackgroundScene;