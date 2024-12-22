'use client'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AudioWaves() {
  const ref = useRef()
  const positions = new Float32Array(2000 * 3)
  
  for (let i = 0; i < 2000; i++) {
    const theta = Math.random() * 360
    const phi = Math.random() * 360
    positions[i * 3] = 20 * Math.sin(theta) * Math.cos(phi)
    positions[i * 3 + 1] = 20 * Math.sin(theta) * Math.sin(phi)
    positions[i * 3 + 2] = 20 * Math.cos(theta)
  }

  return (
    <Points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        size={0.1}
        color="#8b5cf6"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </Points>
  )
}

function MovingGradient() {
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, -10]} scale={40}>
      <planeGeometry />
      <shaderMaterial
        uniforms={{
          uTime: { value: 0 },
          uColorA: { value: new THREE.Color('#4a0e8f') },
          uColorB: { value: new THREE.Color('#1e0445') },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;
          void main() {
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            float wave = sin(dist * 10.0 - uTime) * 0.5 + 0.5;
            vec3 color = mix(uColorA, uColorB, wave);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  )
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
        <MovingGradient />
        <AudioWaves />
      </Canvas>
    </div>
  )
}