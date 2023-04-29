// eslint-disable-next-line
import React from 'react'

import './style.css'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

import App from './app'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas 
        gl={ {
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding
        }}
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 3, 2, 6]
        }}
    >
        <App/>
    </Canvas>
)