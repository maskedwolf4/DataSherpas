'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const initialStyles: Record<string, string> = {
      opacity: '0',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }

    if (direction === 'up') initialStyles.transform = 'translateY(40px)'
    else if (direction === 'left') initialStyles.transform = 'translateX(-40px)'
    else if (direction === 'right') initialStyles.transform = 'translateX(40px)'
    else initialStyles.transform = 'translateY(10px)'

    Object.assign(el.style, initialStyles)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translate(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
