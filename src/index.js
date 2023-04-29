// eslint-disable-next-line
import React from 'react'

import './style.css'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'

import App from './app'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <App/>
    </Canvas>
)