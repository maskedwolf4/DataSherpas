'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let animationId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      animationId = requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      ring.style.borderColor = '#00ff88'
      ring.style.transform += ' scale(1.5)'
    }
    const onMouseLeaveLink = () => {
      ring.style.borderColor = 'rgba(0, 255, 136, 0.4)'
    }

    document.addEventListener('mousemove', onMouseMove)
    animationId = requestAnimationFrame(animate)

    const links = document.querySelectorAll('a, button')
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  )
}
