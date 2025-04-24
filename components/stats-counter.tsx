"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
}

export function StatsCounter({ value, suffix = "", label }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000 // ms
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      const increment = value / totalFrames

      let frame = 0
      const counter = setInterval(() => {
        frame++
        const newCount = Math.min(Math.ceil(countRef.current + increment), value)
        countRef.current = newCount
        setCount(newCount)

        if (frame === totalFrames) {
          clearInterval(counter)
        }
      }, frameDuration)

      return () => clearInterval(counter)
    }
  }, [inView, value])

  return (
    <div ref={ref} className="text-center space-y-4">
      <div className="text-6xl md:text-7xl font-bold text-teal-600 relative inline-block">
        {count}
        {suffix}
        <div className="absolute -bottom-2 left-0 right-0 h-px bg-teal-200"></div>
      </div>
      <div className="text-sm font-medium text-gray-600 tracking-wider">{label}</div>
    </div>
  )
}
