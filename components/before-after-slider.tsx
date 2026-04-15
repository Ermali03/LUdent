"use client"

import { useId, useState } from "react"
import Image from "next/image"

type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  title: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  title,
}: BeforeAfterSliderProps) {
  const inputId = useId()
  const [position, setPosition] = useState(50)

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-neutral-100">
        <Image
          src={afterSrc}
          alt={`${title} after`}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={`${title} before`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div
          className="absolute inset-y-0 z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="relative h-full w-px bg-white/90">
            <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white text-xs font-semibold text-teal-900 shadow-lg">
              ↔
            </div>
          </div>
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-teal-900">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-teal-900/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white">
          After
        </span>
      </div>

      <div className="rounded-full border border-teal-100 bg-white px-4 py-3">
        <label htmlFor={inputId} className="sr-only">
          Slide to compare before and after images
        </label>
        <input
          id={inputId}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="h-2 w-full cursor-pointer accent-teal-700"
        />
      </div>
    </div>
  )
}
