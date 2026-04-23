'use client'

import { useEffect, useState } from 'react'

// ── CSS Fallback ──────────────────────────────────────────────────────────────
function DataFlowFallback() {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
      {/* Animated data pipeline visualization */}
      <svg
        className="w-full h-full max-w-[300px]"
        viewBox="0 0 200 400"
        style={{ opacity: 0.85 }}
      >
        {/* Spiral path */}
        <defs>
          <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="1" />
            <stop offset="50%" stopColor="#00cc6a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ff88" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Helix lines */}
        {[0, 1].map((side) => (
          <path
            key={side}
            d={`M ${100 + (side ? 1 : -1) * 60} 20 
                Q ${100 + (side ? -1 : 1) * 60} 80, ${100 + (side ? 1 : -1) * 60} 140 
                Q ${100 + (side ? -1 : 1) * 60} 200, ${100 + (side ? 1 : -1) * 60} 260 
                Q ${100 + (side ? -1 : 1) * 60} 320, ${100 + (side ? 1 : -1) * 60} 380`}
            stroke="url(#pipeGrad)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            style={{
              animation: `pulse ${2 + side}s ease-in-out infinite`,
              animationDelay: `${side * 0.5}s`,
            }}
          />
        ))}

        {/* Flowing data particles on the path */}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={i}
            r="4"
            fill="#00ff88"
            filter="url(#glow)"
            style={{
              animation: `dataFlow 3s linear infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.6}s`}
              path="M 160 20 Q 40 80, 160 140 Q 40 200, 160 260 Q 40 320, 160 380"
            />
          </circle>
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={`b${i}`}
            r="3"
            fill="#00cc6a"
            opacity="0.7"
            filter="url(#glow)"
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.6 + 0.3}s`}
              path="M 40 20 Q 160 80, 40 140 Q 160 200, 40 260 Q 160 320, 40 380"
            />
          </circle>
        ))}

        {/* Node markers */}
        {[{ cx: 40, cy: 140 }, { cx: 160, cy: 260 }, { cx: 100, cy: 200 }].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r="8" fill="none" stroke="#00ff88" strokeWidth="1.5" opacity="0.6"
              style={{ animation: `pulse ${2 + i}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }} />
            <circle cx={node.cx} cy={node.cy} r="4" fill="#00ff88" opacity="0.9"
              style={{ animation: `pulse ${1.5 + i * 0.5}s ease-in-out infinite` }} />
          </g>
        ))}
      </svg>
    </div>
  )
}

// ── Three.js canvas (lazy) ────────────────────────────────────────────────────
function ThreeDataFlowCanvas() {
  const [Comp, setComp] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    import('./DataFlowSceneCanvas')
      .then((m) => setComp(() => m.default))
      .catch(() => {})
  }, [])

  if (!Comp) return null
  return <Comp />
}

// ── Public export ─────────────────────────────────────────────────────────────
export default function DataFlowScene({ className = '' }: { className?: string }) {
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
      <DataFlowFallback />
      {webgl === true && (
        <div className="absolute inset-0">
          <ThreeDataFlowCanvas />
        </div>
      )}
    </div>
  )
}
