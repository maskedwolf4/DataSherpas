'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function DataPipeline() {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = i / count
      positions[i * 3] = Math.cos(t * Math.PI * 8) * 2
      positions[i * 3 + 1] = (t - 0.5) * 8
      positions[i * 3 + 2] = Math.sin(t * Math.PI * 8) * 2
      colors[i * 3] = t > 0.5 ? 1 : t * 2
      colors[i * 3 + 1] = 1
      colors[i * 3 + 2] = t > 0.5 ? 1 : 0.5
    }
    return { positions, colors }
  }, [])

  useFrame((s) => {
    if (groupRef.current) groupRef.current.rotation.y = s.clock.elapsedTime * 0.3
    if (particlesRef.current) particlesRef.current.rotation.y = -s.clock.elapsedTime * 0.1
  })

  return (
    <group ref={groupRef}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.08} vertexColors transparent opacity={0.9} sizeAttenuation />
      </points>
      {([ [-1, -2, 0], [1, 0, 0], [-1, 2, 0] ] as [number,number,number][]).map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={1} />
        </mesh>
      ))}
    </group>
  )
}

export default function DataFlowSceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }} style={{ background: 'transparent' }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 5, 5]} intensity={2} color="#00ff88" />
      <pointLight position={[0, -5, 5]} intensity={1} color="#00cc6a" />
      <DataPipeline />
    </Canvas>
  )
}
