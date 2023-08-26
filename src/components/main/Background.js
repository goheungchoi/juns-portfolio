import { Plane, Stars, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef, useState, Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Model from '../../data/model.glb'

function rand(min, max) {
  const diff = max - min;
  return Math.random() * diff + min;
}

function Box(props) {
  const ref = useRef();

  const [color, setColor] = useState([Math.random(), Math.random(), Math.random()]);
  const [scale, setScale] = useState(rand(1, 5.1));
  const [rotation, setRotation] = useState([rand(0, Math.PI/2), rand(0, Math.PI/2), rand(0, Math.PI/2)]);
  const [position, setPosition] = useState([rand(-100, 100), rand(-60, 60), rand(-30, 30)]);
  let xRotationSpeed = rand(0.0001, 0.005);
  let yRotationSpeed = rand(0.0001, 0.005);
  let zRotationSpeed = rand(0.0001, 0.005);
  let floatingSpeed = rand(1, 2);

  const randomize = () => {
    setColor([Math.random(), Math.random(), Math.random()]);
    setScale(rand(1, 5.1));
    setRotation([rand(0, Math.PI/2), rand(0, Math.PI/2), rand(0, Math.PI/2)]);
    setPosition([rand(-100, 100), -60, 0]);
    xRotationSpeed = rand(0.0001, 0.005);
    yRotationSpeed = rand(0.0001, 0.005);
    zRotationSpeed = rand(0.0001, 0.005);
    floatingSpeed = rand(1, 2);
  }

  useFrame((state, delta) => {
    ref.current.rotation.x += xRotationSpeed;
    ref.current.rotation.y += yRotationSpeed;
    ref.current.rotation.z += zRotationSpeed;

    ref.current.position.y += delta * floatingSpeed;

    if (ref.current.position.y > 60) {
      randomize();
    }
  })

  return (
    <mesh 
      rotation={rotation}
      position={position}
      scale={scale}
      {...props}
      ref={ref}
    >
      <pointLight 
        power={50}
        intensity={0.5} 
        color={color}
      />
    </mesh>
  )
}

function Orbit() {
  const ref = useRef();
  return <OrbitControls
            makeDefault
            enableZoom={false}
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2}
            ref={ref}
          />
}

function RandomBoxGenerator(props) {
  const MAX_NUM_BOXES = 10;
  const boxes = [];

  for (let i = 0; i < MAX_NUM_BOXES; i++) {
    boxes.push(<Box key={boxes.length} {...props}/>);
  }

  return boxes;
}

function Background() {
  const { nodes, materials } = useGLTF(Model);
  const geo = nodes.Cube.geometry;
  const mat = materials.Material;

  return (
    <Canvas
      shadows={true}
      camera={{near: 0.1, fov: 75, position: [0, 0, -50]}}
    >
      <color attach="background" args={["black"]} />
      <Stars 
        count={1000}
      />
      <Orbit />
      <ambientLight 
        intensity={10}
      />
      <RandomBoxGenerator 
        geometry={geo}
        material={mat}
      />
    </Canvas>
  )
}

export default Background;