'use client'

import { useEffect, useState } from 'react'

// ── Beautiful CSS fallback ────────────────────────────────────────────────────
export function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Main 3D-like orb cluster on right */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[480px] h-[480px] hidden lg:block">
        {/* Orbital rings */}
        {[
          { scale: 1, duration: '14s', rx: '60deg', ry: '0deg', opacity: 0.25 },
          { scale: 0.75, duration: '10s', rx: '0deg', ry: '60deg', opacity: 0.2 },
          { scale: 0.5, duration: '7s', rx: '30deg', ry: '30deg', opacity: 0.3 },
        ].map((ring, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-green-neon"
            style={{
              opacity: ring.opacity,
              transform: `scale(${ring.scale}) rotateX(${ring.rx}) rotateY(${ring.ry})`,
              animation: `spin ${ring.duration} linear infinite ${i % 2 ? 'reverse' : ''}`,
            }}
          />
        ))}

        {/* Core sphere glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(0,255,136,0.35) 0%, rgba(0,255,136,0.08) 55%, transparent 100%)',
            boxShadow: '0 0 60px rgba(0,255,136,0.35), 0 0 120px rgba(0,255,136,0.12)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,136,0.6) 0%, transparent 70%)',
          }}
        />

        {/* Floating data nodes */}
        {[
          { top: '8%', left: '22%', delay: '0s', size: 8 },
          { top: '20%', left: '82%', delay: '0.8s', size: 6 },
          { top: '55%', left: '5%', delay: '1.6s', size: 10 },
          { top: '75%', left: '78%', delay: '0.4s', size: 7 },
          { top: '88%', left: '38%', delay: '1.2s', size: 5 },
          { top: '40%', left: '92%', delay: '2s', size: 8 },
        ].map((n, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-neon"
            style={{
              width: n.size,
              height: n.size,
              top: n.top,
              left: n.left,
              boxShadow: `0 0 ${n.size * 2}px rgba(0,255,136,0.9)`,
              animation: `float ${3 + i * 0.6}s ease-in-out infinite`,
              animationDelay: n.delay,
            }}
          />
        ))}

        {/* SVG connections */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 480" style={{ opacity: 0.15 }}>
          <line x1="106" y1="38" x2="394" y2="96" stroke="#00ff88" strokeWidth="1" />
          <line x1="394" y1="96" x2="24" y2="264" stroke="#00ff88" strokeWidth="1" />
          <line x1="24" y1="264" x2="374" y2="360" stroke="#00ff88" strokeWidth="1" />
          <line x1="374" y1="360" x2="182" y2="422" stroke="#00ff88" strokeWidth="1" />
          <line x1="106" y1="38" x2="182" y2="422" stroke="#00ff88" strokeWidth="1" />
          <circle cx="106" cy="38" r="4" fill="#00ff88" opacity="0.8" />
          <circle cx="394" cy="96" r="4" fill="#00ff88" opacity="0.8" />
          <circle cx="24" cy="264" r="5" fill="#00ff88" opacity="0.8" />
          <circle cx="374" cy="360" r="3" fill="#00ff88" opacity="0.8" />
          <circle cx="182" cy="422" r="4" fill="#00ff88" opacity="0.8" />
        </svg>
      </div>

      {/* Star field */}
      {Array.from({ length: 80 }).map((_, i) => {
        const size = i % 5 === 0 ? 2 : 1
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              top: `${(i * 13.7) % 100}%`,
              left: `${(i * 23.1) % 100}%`,
              opacity: 0.1 + (i % 5) * 0.1,
              animation: `pulse ${2 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.3) % 4}s`,
            }}
          />
        )
      })}
    </div>
  )
}

// ── Three.js canvas (only mounted when WebGL confirmed) ───────────────────────
function ThreeHeroCanvas() {
  const [Comp, setComp] = useState<React.ComponentType | null>(null)
  const [err, setErr] = useState(false)

  useEffect(() => {
    import('./HeroSceneCanvas')
      .then((m) => setComp(() => m.default))
      .catch(() => setErr(true))
  }, [])

  if (err || !Comp) return null

  return (
    <div className="absolute inset-0">
      <Comp />
    </div>
  )
}

// ── Public export ─────────────────────────────────────────────────────────────
export default function HeroScene({ className = '' }: { className?: string }) {
  const [webgl, setWebgl] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setWebgl(!!gl)
    } catch {
      setWebgl(false)
    }
  }, [])

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* CSS layer is always visible */}
      <HeroFallback />
      {/* Three.js layer layered on top only when WebGL works */}
      {webgl === true && <ThreeHeroCanvas />}
    </div>
  )
}
