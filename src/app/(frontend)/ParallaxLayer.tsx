'use client'

import { useEffect, useState, useRef } from 'react'

type ParallaxLayerProps = {
  children: React.ReactNode
  /** 0 = fixed, 0.5 = moves half as fast as scroll (classic bg parallax), 1 = normal */
  speed?: number
  className?: string
}

export default function ParallaxLayer({ children, speed = 0.45, className = '' }: ParallaxLayerProps) {
  const [translateY, setTranslateY] = useState(0)
  const [scale, setScale] = useState(1)
  const rafRef = useRef<number>(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      rafRef.current = requestAnimationFrame(() => {
        const sy = window.scrollY
        setTranslateY(sy * speed)
        setScale(1 + Math.min(sy / 3500, 0.12))
        tickingRef.current = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [speed])

  return (
    <div
      className={className}
      style={{ transform: `translate3d(0, ${translateY}px, 0) scale(${scale})` }}
    >
      {children}
    </div>
  )
}
