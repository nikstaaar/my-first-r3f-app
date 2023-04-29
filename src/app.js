import React from "react"
import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
<orbitControls args={[ camera, gl.domElement]}/>

<group ref={ groupRef }>
<mesh position-x={ -2}>
    <sphereGeometry/>
    <meshBasicMaterial color="orange"/>
</mesh>

<mesh ref={ cubeRef } rotation-y={Math.PI * 0.25} position-x={ 2 } scale={ 1.5 }>
     <boxGeometry scale={1.5}/>
     <meshBasicMaterial color={"mediumpurple"} wireframe={ true }/>
</mesh>

<mesh position-y={-1} rotation-x={ - Math.PI * 0.5} scale ={10}>
    <planeGeometry/>
    <meshBasicMaterial color="greenyellow"/>
</mesh>
</group>
</>
  )
}