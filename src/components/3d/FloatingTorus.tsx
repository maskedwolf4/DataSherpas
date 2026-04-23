'use client'

import { useEffect, useState } from 'react'

// ── CSS fallback ──────────────────────────────────────────────────────────────
function TorusFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Outer torus rings */}
      {[
        { size: 220, border: 3, duration: '8s', rx: '70deg', opacity: 0.6 },
        { size: 160, border: 2, duration: '5s', rx: '20deg', opacity: 0.4 },
        { size: 100, border: 2, duration: '12s', rx: '50deg', opacity: 0.3 },
      ].map((ring, i) => (
        <div
          key={i}
          className="absolute rounded-full border-green-neon"
          style={{
            width: ring.size,
            height: ring.size,
            border: `${ring.border}px solid rgba(0,255,136,${ring.opacity})`,
            boxShadow: `0 0 20px rgba(0,255,136,${ring.opacity * 0.5}), inset 0 0 20px rgba(0,255,136,${ring.opacity * 0.2})`,
            animation: `spin ${ring.duration} linear infinite ${i % 2 ? 'reverse' : ''}`,
            transform: `rotateX(${ring.rx})`,
          }}
        />
      ))}
      {/* Core */}
      <div
        className="w-16 h-16 rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.5) 0%, rgba(0,255,136,0.1) 60%, transparent 100%)',
          boxShadow: '0 0 40px rgba(0,255,136,0.5)',
        }}
      />
    </div>
  )
}

// ── Three.js canvas (lazy, only on WebGL) ─────────────────────────────────────
function ThreeTorusCanvas() {
  const [Comp, setComp] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    import('./FloatingTorusCanvas')
      .then((m) => setComp(() => m.default))
      .catch(() => {})
  }, [])

  if (!Comp) return null
  return <Comp />
}

// ── Public export ─────────────────────────────────────────────────────────────
export default function FloatingTorus({ className = '' }: { className?: string }) {
  const [webgl, setWebgl] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const c = document.createElement('canvas')
      setWebgl(!!(c.getContext('webgl') || c.getContext('experimental-webgl')))
    } catch {
      setWebgl(false)
    }
  }, [])

  return (
    <div className={`w-full h-full relative ${className}`}>
      <TorusFallback />
      {webgl === true && (
        <div className="absolute inset-0">
          <ThreeTorusCanvas />
        </div>
      )}
    </div>
  )
}
