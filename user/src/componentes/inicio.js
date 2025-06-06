import * as THREE from 'three'
import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import HeroPage from './HeroPage'
import HeroPagewww from './HeroPage copy'
import { TextureLoader } from 'three'
import Message from './message'
import { useState } from 'react'
// import { Canvas, useThree } from '@react-three/fiber'
// import { Html, OrbitControls } from '@react-three/drei'
// import { Slider } from 'antd'
import { useProgress } from '@react-three/drei'
import { Model } from './sphere'
// import { Popover, Transition } from '@headlessui/react'

// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { socket } from '../socket';

const solutions = [
  {
    name: 'Árticulos',
    description: 'Novedades en el arte',
    href: '/',
    icon: IconOne,
  },
  {
    name: 'Automatizaciones',
    description: 'Reduciendo tiempos en procesos técnicos prácticos',
    href: '/nosotros',
    icon: IconTwo,
  },
  {
    name: 'Reportes ESFA',
    description: 'Investigaciones realizadas en la ESFA',
    href: '/nosotros',
    icon: IconThree,
  },
]

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}

// import logo from '../logo.png';
// import { App } from './www1.js'
// import logo from '../logo.svg'

// const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
// const images = [
//   // Front
//   { position: [0, 0, 1.5], rotation: [0, 0, 0], url: './Photosphere1.jpg' },
//   // Back
//   { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: './logo192.png' },
//   { position: [-1.5, 0, -1.6], rotation: [0, 0, 0], url: pexel(416430) },
//   { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: './ww_w.png' },
//   // Left
//   { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
//   { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
//   { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
//   // Right
//   { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
//   { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
//   { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
// ]
// const Home = () => {
//   return (
//     <div style={{ height: '18cm', margin: 'auto' }}>

//       {pexel?<App images={images} />
//       :<header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>}

//     </div>
//   );
// };

// export default Home;


function Modelwww(props) {
  const group = useRef()
  // Load model
  // const { nodes, materials } = useGLTF('/mac-draco.glb')
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
  })
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null}>
      <boxGeometry />
      <meshStandardMaterial />
      {/* <group rotation-x={-0.5} position={[0, -2.5, 0]}> */}
      {/* <group rotation={[Math.PI / 2, 0, 0]}> */}
      {/* <mesh material={materials.aluminium} scale={2.5} geometry={nodes['Cube008'].geometry} /> */}
      {/* <mesh material={materials['matte.001']} scale={2.5} geometry={nodes['Cube008_1'].geometry} /> */}
      {/* <mesh geometry={nodes['Cube008_2'].geometry}> */}
      {/* Drei's HTML component can "hide behind" canvas geometry */}
      <Html className="content" style={{ background: 'magenta' }} position={[0, 0, -5]} transform>
        <HeroPage />
      </Html>

      <Html className="content" transform>
        {/* <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}> */}
        <HeroPage />
        {/* </div> */}
      </Html>
      {/* </mesh> */}
      {/* </group> */}
      {/* </group> */}
      {/* <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} /> */}
      {/* <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group> */}
      {/* <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} /> */}
    </group>
  )
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % Cargando</Html>
}
function Box(props) {
  const group = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.1, 0.1)
    // group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    // group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    // group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
  })

  // const { progress } = useProgress()
  // return <Html center>{progress} % loaded</Html>
  const [size, set] = useState(5.5)
  // const controls = useThree((state) => state.controls)
  const colorMap = useLoader(TextureLoader, './Photosphere1.jpg')
  // const gltf = useLoader(GLTFLoader, './www.gltf')

  /////////////////////////////////////////////////////////////////////////////////////////////////////tamaño control window
  const [sizew, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    })
  useEffect(() => (
    window.onresize = updateSize
    // socket.disconnect()

  ), [])
  /////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh scale={sizew.x < 615 ? size * .5 : size * 1}>
        <ambientLight intensity={2} />
        <directionalLight />
        <mesh>
          {/* <Model scale={2.5} /> */}
          <meshStandardMaterial map={colorMap} />
        </mesh>
        {/* <primitive object={gltf} /> */}
        <Html className="content" style={{ background: 'white' }} occlude="blending" distanceFactor={1.8} position={[0, 0, -3]} rotation-y={-3.14} transform>
          <HeroPage />
        </Html>
        <Html className="content" style={{ background: 'white' }} occlude="blending" distanceFactor={1.8} rotation-y={-3.14} rotation-x={-3.14} rotation-z={-3.1416} position={[0, 0, 3]} transform>
          <HeroPage />
        </Html>
        <Html className="content" style={{ background: 'rgb(155,95,155)' }} occlude="blending" distanceFactor={1.8} rotation-y={3.14 / 2} rotation-x={-3.14} rotation-z={-3.1416} position={[3, 0, 0]} transform>
          <HeroPagewww />
        </Html>
        <Html className="content" style={{ background: 'orange' }} occlude="blending" distanceFactor={1.8} rotation-y={-3.14 / 2} rotation-x={-3.14} rotation-z={-3.1416} position={[-3, 0, 0]} transform>
          <HeroPagewww />
        </Html>

      </mesh>
    </group>
  )
}


export default function Home() {
  return (
    <>
      <div className="iniciocontenedor">
        <Canvas camera={{ position: [9, -6, 66], fov: 35 }}>
          {/* <pointLight position={[10, 10, 10]} intensity={1.5} /> */}
          <Suspense fallback={<Loader />}>
            {/* <group position={[0, 1.5, 0]}> */}
            <Model scale={11.5} />
            <Box />
            {/* </group> */}
            {/* <Environment preset="city" /> */}
          </Suspense>
          {/* <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} /> minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2}*/}
          <OrbitControls enablePan={false} enableZoom={true} />
        </Canvas>

        {/* <Canvas camera={{ position: [2, 1, 5], fov: 35 }}> */}
        {/* <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 5]} />
          <pointLight position={[-10, -10, -10]} /> */}
        {/* <Box /> */}
        {/* <OrbitControls makeDefault /> */}
        {/* </Canvas> */}
        <Message />

      </div>
      {/* <div>
        <Popover className="">
          {({ open }) => (
            <>
              <Popover.Button style={{ position: 'absolute', bottom: ".3cm", right: ".3cm", margin: 'auto', zIndex: '99999999' }}
              >
                Chat
              </Popover.Button>
              <Transition
              >
                <Popover.Panel className="" style={{ position: 'absolute', bottom: "1.3cm", right: '.3cm', height: '80vh', width: '12cm', margin: 'auto', display: 'block', zIndex: '9999999', backgroundColor: 'rgba(98, 58, 58, .9)' }} >
                  <Message />
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div> */}
    </>
  )
}
