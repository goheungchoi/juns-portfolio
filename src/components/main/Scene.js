import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { useState, useEffect, useRef } from 'react'
import { TextureLoader } from 'three'
import flyThroughCamera from '../../data/Demo Project.theatre-project-state.json'

import { editable as e, getProject, val } from '@theatre/core'
import { SheetProvider, useCurrentSheet, PerspectiveCamera } from '@theatre/r3f'

const demoSheet = getProject('Demo Project', {state: flyThroughCamera}).sheet('Demo Sheet');

// const playheadIntervals = [[0, 0], [0, 1], [1, 2], [2, 3]]

function Meshes({nav}) {
  const [currentNav, setCurrentNav] = useState(0);
  // const [interval, setInterval] = useState([0, 0]);
  const [playheadSpeed, setPlayheadSpeed] = useState(0.01);
  const sheet = useCurrentSheet();

  const disc = useLoader(TextureLoader, 'disc.png');
  const pointsRef = useRef(null);
  const meshRef = useRef(null);
  const boxRef = useRef(null);

  useFrame(({ clock, camera }) => {
    if (!pointsRef || !meshRef) return;
    const elaspedTime = clock.getElapsedTime();
    meshRef.current.rotation.y = -elaspedTime/100;
    pointsRef.current.rotation.y = -elaspedTime/100;
    boxRef.current.rotation.z = +elaspedTime/5;

    meshRef.current.rotation.x = elaspedTime/500;
    pointsRef.current.rotation.x = elaspedTime/500;
    boxRef.current.rotation.x = +elaspedTime/5;

    const shouldMoveForward = (0 < playheadSpeed) && (sheet.sequence.position < nav);
    const shouldMoveBackward = (playheadSpeed < 0) && (sheet.sequence.position > nav);
    sheet.sequence.position += (playheadSpeed * (shouldMoveForward || shouldMoveBackward));
    // console.log('nav', nav);
    // console.log('playheadSpeed', playheadSpeed);
    // console.log('shouldMoveForward', shouldMoveForward);
    // console.log('shouldMoveBackward', shouldMoveBackward);
    // console.log('sheet position', sheet.sequence.position);
  });

  useEffect(()=> {
    if (currentNav !== nav) {
      const speed = (nav - currentNav)/50;
      setPlayheadSpeed(speed);
      console.log(speed);
      setCurrentNav(nav);
    }
  }, [nav]);

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
        ref={boxRef}
        position={[20, -5, 10]}
      >
        <boxGeometry 
          args={[2, 2, 2]}
        />
        <meshStandardMaterial 
          color='hotpink'
        />
      </mesh>
    </>
  )
}

function BackgroundScene({nav}) {
  console.log("background rendered.");
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
        <Meshes nav={nav}/>
      </ SheetProvider>
    </Canvas>
  )
}

export default BackgroundScene;