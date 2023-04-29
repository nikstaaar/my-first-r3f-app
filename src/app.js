import React from "react"
import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from "./customObject"


extend ({ OrbitControls })

export default function App () 
{
 const { camera, gl } = useThree()
 const cubeRef = useRef()
 const groupRef = useRef()

 useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
    groupRef.current.rotation.y += delta * 0.25

 })

 return (
<>
<orbitControls args={ [ camera, gl.domElement] }/>

<directionalLight position={ [1, 2, 3] } intensity={ 1.5 }/>
<ambientLight intensity={0.5}/>

<group ref={ groupRef }>
<mesh position-x={ -2}>
    <sphereGeometry/>
    <meshStandardMaterial color="orange"/>
</mesh>

<mesh ref={ cubeRef } rotation-y={Math.PI * 0.25} position-x={ 2 } scale={ 1.5 }>
     <boxGeometry scale={1.5}/>
     <meshStandardMaterial color={"mediumpurple"} wireframe={ true }/>
</mesh>
</group>

<mesh position-y={-1} rotation-x={ - Math.PI * 0.5} scale ={10}>
    <planeGeometry/>
    <meshStandardMaterial color="greenyellow"/>
</mesh>

<CustomObject/>
</>
  )
}