import Link from "next/link"

import { hasSanityEnv } from "@/lib/sanity/env"
import { StudioClient } from "./studio-client"

export const metadata = {
  title: "Sanity Studio | LUDent",
  robots: {
    index: false,
    follow: false,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
}

export default function StudioPage() {
  if (!hasSanityEnv) {
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Sanity Studio needs environment variables
          </h1>
          <p className="mt-4 text-white/70">
            Add your Sanity project values to <code>.env.local</code>, then
            refresh this page.
          </p>
          <div className="mt-6 rounded-2xl bg-black/30 p-5 text-sm text-white/80">
            <p>NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id</p>
            <p>NEXT_PUBLIC_SANITY_DATASET=production</p>
            <p>NEXT_PUBLIC_SANITY_API_VERSION=2026-04-15</p>
          </div>
          <Link
            href="/our-work"
            className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950"
          >
            Back to Our Work
          </Link>
        </div>
      </main>
    )
  }

  return <StudioClient />
}
