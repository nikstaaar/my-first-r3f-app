import React from "react"

export default function App () 
{
 return (
<mesh rotation-y={Math.PI * 0.25} position-x={ 2 } scale={ 1.5 }>
     <boxGeometry scale={1.5}/>
     <meshBasicMaterial color={"mediumpurple"} wireframe={ true }/>
</mesh>
  )
}