'use client'

import { useEffect, useState } from 'react'

type ParallaxLayerProps = {
  children: React.ReactNode
  /** 0 = fixed, 0.5 = moves half as fast as scroll (classic bg parallax), 1 = normal */
  speed?: number
  className?: string
}

export default function ParallaxLayer({ children, speed = 0.45, className = '' }: ParallaxLayerProps) {
  const [translateY, setTranslateY] = useState(0)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY
      setTranslateY(sy * speed)
      // Slight scale so no gap shows when video lags on scroll
      setScale(1 + Math.min(sy / 3500, 0.12))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
