// eslint-disable-next-line
import React from 'react'

import './style.css'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas>
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    </>
)