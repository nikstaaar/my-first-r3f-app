import React from "react"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function App () 
{
 const cubeRef = useRef()
 const groupRef = useRef()

 useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
    groupRef.current.rotation.y += delta * 0.25

 })

 return (
<>
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