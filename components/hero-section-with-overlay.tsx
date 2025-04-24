import type React from "react"
import Image from "next/image"

interface HeroSectionWithOverlayProps {
  title: string
  subtitle?: string
  height?: "small" | "medium" | "large"
  imageSrc: string
  children?: React.ReactNode
}

export function HeroSectionWithOverlay({
  title,
  subtitle,
  height = "medium",
  imageSrc,
  children,
}: HeroSectionWithOverlayProps) {
  const heightClass = {
    small: "min-h-[40vh]",
    medium: "min-h-[60vh]",
    large: "min-h-screen",
  }

  return (
    <section className={`relative ${heightClass[height]} flex items-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-teal-900/70"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block">
            {subtitle && (
              <>
                <span className="text-xs tracking-widest text-teal-300 uppercase font-medium">{subtitle}</span>
                <div className="h-px w-20 bg-teal-500 mx-auto mt-2"></div>
              </>
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">{title}</h1>
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
