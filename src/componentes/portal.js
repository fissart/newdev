import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Preload } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
// import { suspend } from 'suspend-react'
// https://9m4tpc.csb.app/#
// https://codesandbox.io/p/sandbox/9m4tpc?file=%2Fsrc%2FApp.js%3A12%2C1
extend(geometry)
// const regular = import('@pmndrs/assets/fonts/inter_regular.woff')
// const medium = import('@pmndrs/assets/fonts/inter_medium.woff')

export const Www = () => (
  <Canvas flat camera={{ fov: 55, position: [0, 0, 20] }} eventSource={document.getElementById('root')} eventPrefix="client">
    <color attach="background" args={['#fff']} />
    <Frame id="01" name={`Escultura`} author="Ricardo MB" bg="#e4cdac" position={[-1.15, 0, 0]} rotation={[0, 0.3, 0]}>
      <Gltf src="www-transformed.glb" scale={.2} position={[0, -.2, -5]} />
    </Frame>
    {/* <Frame id="02" name="ok" author="Omar Faruq Tawsif"  position={[1.15, 0, -1.15]} rotation={[0, 3.15, 0]}>
      <Gltf src="burgerpiz.glb" position={[0, -19, -3]} />
    </Frame>
    */}
    <Frame id="02" name={`Pintura`} author="Omar Faruq Tawsif" position={[0, 0, -.15]} rotation={[0, 0, 0]}>
      <Gltf src="fiesta_tea-transformed-transformed.glb" scale={1} position={[0, -2, -3]} />
    </Frame>
    <Frame id="03" name={`Grabado`} author="Www" bg="#d1d1ca" position={[1.15, 0, 0]} rotation={[0, -0.3, 0]}>
      <Gltf src="the_works_of_william_shakespeare-transformed.glb" scale={1} position={[0, .2, -3]} />
    </Frame>
    <Frame id="04" name={`Educación\n\nartística`} author="Ricardo" bg="#e4cdac"  position={[0, -1.8, -.15]}>
      <Gltf src="house.glb" position={[-.1, .3, -1.8]}/>
    </Frame>
    <Rig />
    <Preload all />
  </Canvas>
)

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
  const portal = useRef()
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
      <Text fontSize={0.15} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
        {name}
      </Text>
      <Text fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={true}>
        /{id}
      </Text>
      <Text fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={true}>
        {author}
      </Text>
      <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

function Rig({ position = new THREE.Vector3(0, 0, 5), focus = new THREE.Vector3(0, -.8, 0) }) {
  const { controls, scene } = useThree()
  const [, params] = useRoute('/item/:id')
  useEffect(() => {
    const active = scene.getObjectByName(params?.id)
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  })
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}
