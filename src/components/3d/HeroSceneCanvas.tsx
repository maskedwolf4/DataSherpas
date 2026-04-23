'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 3000
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.02
      ref.current.rotation.y = s.clock.elapsedTime * 0.015
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#00ff88" size={0.02} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  )
}

function DataNode({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.5
      ref.current.rotation.y = s.clock.elapsedTime * 0.3
      ref.current.position.y = position[1] + Math.sin(s.clock.elapsedTime + position[0]) * 0.3
    }
  })
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.15, 0]} />
      <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} transparent opacity={0.8} wireframe />
    </mesh>
  )
}

function Sphere() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.15
      ref.current.rotation.x = s.clock.elapsedTime * 0.08
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial color="#003322" emissive="#00ff88" emissiveIntensity={0.05} transparent opacity={0.15} wireframe />
    </mesh>
  )
}

const nodePositions: [number, number, number][] = [
  [-2, 1, -1], [2, 0.5, -1], [-1.5, -1, -0.5],
  [1.8, -0.8, -1.5], [0, 1.5, -2], [-0.5, -1.5, -1],
]

export default function HeroSceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent' }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00ff88" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00cc6a" />
      <StarField />
      <Sphere />
      {nodePositions.map((pos, i) => <DataNode key={i} position={pos} />)}
    </Canvas>
  )
}
