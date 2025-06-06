import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { FlakesTexture } from 'three-stdlib'

export default function App() {
  return (
    <Canvas shadows camera={{ position: [4, 2.5, 8], fov: 35 }}>
      <group position={[0, -0.5, 0]}>
        <Center top>
          <mesh castShadow>
            {/* <Box position={[-2, 2.5, 0]} />
            <Box position={[2, 2.5, 0]} /> */}
          </mesh>
        </Center>
        <Center rotation={[0, Math.PI / 1, 0]} scale={.3} position={[2, 1.8, 0]}>
          <Suzi  />
        </Center>
        <Center top position={[-2, 0, 1]}>
          <mesh castShadow>
            <sphereGeometry args={[0.25, 64, 64]} />
            <meshStandardMaterial color="lightblue" />
          </mesh>
        </Center>
        <Center top position={[-3, .5, 1]}>
          <mesh castShadow>
            <sphereGeometry args={[0.5, 64, 64]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </Center>
        <Center top position={[2.5, 0, 1]}>
          <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="indianred" />
          </mesh>
        </Center>
        <AccumulativeShadows temporal frames={100} color="orange" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
          <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Environment preset="city" />
    </Canvas>
  )
}

function Suzi(props) {
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  
  const { scene, materials } = useGLTF('/new.gltf')
  useLayoutEffect(() => {
    scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
    // materials.default.color.set('orange')
    materials.roughness = 0
    materials.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
    materials.normalMap.repeat.set(40, 40)
    // materials.normalScale.set(0.1, 0.1)
  })

  return <primitive object={scene} {...props} 
  ref={ref}
  scale={clicked ? 1.5 : 1}
  onClick={(event) => click(!clicked)}
  onPointerOver={(event) => (event.stopPropagation(), hover(true))}
  onPointerOut={(event) => hover(false)}></primitive>
}

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <torusGeometry args={[1, .2, ,158, 18, 78]} />
      <meshStandardMaterial color={hovered ? 'white' : 'blue'} />
    </mesh>
  )
}
