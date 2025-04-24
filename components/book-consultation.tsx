import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BookConsultationProps {
  variant?: "default" | "white"
}

export function BookConsultation({ variant = "default" }: BookConsultationProps) {
  const textColor = variant === "white" ? "text-white" : "text-teal-600"

  return (
    <Link href="/appointment" className={`inline-flex items-center ${textColor} font-medium group`}>
      BOOK A CONSULTATION <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  )
}
