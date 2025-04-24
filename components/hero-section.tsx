import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 h-[500px] md:h-[600px]" />

      <div className="container relative px-4 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Your Smile Deserves the Best Care
            </h1>
            <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
              At LUDent Dental Clinic, we combine advanced technology with compassionate care to provide exceptional
              dental services for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute inset-0 w-64 h-64 mx-auto my-auto bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000" />

            <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Dental care at LUDent"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
