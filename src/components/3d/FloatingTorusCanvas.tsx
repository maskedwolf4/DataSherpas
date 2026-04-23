'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Torus, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function RotatingTorus() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.3
      ref.current.rotation.y = s.clock.elapsedTime * 0.5
    }
  })
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Torus ref={ref} args={[1.2, 0.4, 16, 100]}>
        <MeshDistortMaterial color="#00ff88" emissive="#00cc6a" emissiveIntensity={0.4} distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
      </Torus>
    </Float>
  )
}

function InnerRing() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = -s.clock.elapsedTime * 0.6
      ref.current.rotation.z = s.clock.elapsedTime * 0.4
    }
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.7, 0.05, 8, 80]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} transparent opacity={0.4} />
    </mesh>
  )
}

export default function FloatingTorusCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ background: 'transparent' }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#00ff88" />
      <pointLight position={[-3, -3, 3]} intensity={1} color="#00cc6a" />
      <RotatingTorus />
      <InnerRing />
    </Canvas>
  )
}
