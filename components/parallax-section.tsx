"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <Image src="/images/image1.jpg" alt="FREE YOUR SMILE" fill className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-teal-900/70"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            EXPERIENCE <br />
            THE ART OF <br />
            <span className="text-teal-300">DENTISTRY LUXURY</span>
          </h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            At LUDent, we believe that dental care should be an experience, not just a treatment. Our state-of-the-art
            facility is designed to provide maximum comfort while our expert team delivers exceptional results.
          </p>
        </div>
      </div>
    </section>
  )
}
