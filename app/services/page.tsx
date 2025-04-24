import Link from "next/link";
import Image from "next/image";

import { BookConsultation } from "@/components/book-consultation";
import { ServiceCard } from "@/components/service-card";
import { HeroSectionWithOverlay } from "@/components/hero-section-with-overlay";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSectionWithOverlay
        title="PREMIUM DENTAL SERVICES"
        subtitle="Our Services"
        imageSrc="/images/image3.jpg"
      >
        <p className="text-teal-100 text-lg">
          Comprehensive dental care tailored to your unique needs, delivered
          with precision and artistry.
        </p>
      </HeroSectionWithOverlay>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-xs tracking-widest text-teal-800 uppercase font-medium">
                  Why Choose Us
                </span>
                <div className="h-px w-20 bg-teal-500 mt-2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                PREMIUM <br />
                <span className="text-teal-600">DENTAL CARE</span>
              </h2>
              <p className="text-gray-600 text-lg">
                At LUDent, we believe that everyone deserves access to
                high-quality dental care. Our comprehensive range of services is
                designed to address all your oral health needs, from routine
                check-ups to complex restorative procedures.
              </p>
              <p className="text-gray-600">
                Our team of specialists uses the latest technologies and
                techniques to ensure optimal results with minimal discomfort. We
                take the time to understand your unique needs and develop
                personalized treatment plans that align with your goals and
                preferences.
              </p>
              <div className="pt-4">
                <BookConsultation />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 border border-teal-200 translate-x-4 translate-y-4"></div>
              <Image
                src="/images/image2.jpg"
                alt="Premium dental care"
                width={600}
                height={700}
                className="object-cover w-full h-[600px] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    id: "implants",
    title: "DENTAL IMPLANTS",
    description:
      "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    icon: "Tooth",
  },
  {
    id: "veneers",
    title: "VENEERS",
    description:
      "Thin porcelain shells that cover the front surface of teeth to improve appearance.",
    icon: "Smile",
  },
  {
    id: "orthodontics",
    title: "ORTHODONTICS",
    description:
      "Treatments to correct misaligned teeth and jaws for a beautiful, functional smile.",
    icon: "AlignLeft",
  },
  {
    id: "zirkon",
    title: "ZIRKON CROWNS",
    description:
      "High-quality, natural-looking dental crowns made from zirconium dioxide.",
    icon: "Crown",
  },
  {
    id: "esthetic-fill",
    title: "ESTHETIC FILLINGS",
    description:
      "Tooth-colored fillings that restore damaged teeth while maintaining a natural appearance.",
    icon: "Paintbrush",
  },
  {
    id: "whitening",
    title: "PROFESSIONAL WHITENING",
    description:
      "Advanced teeth whitening treatments for a brighter, more confident smile.",
    icon: "Sparkles",
  },
  {
    id: "filler",
    title: "DERMAL FILLERS",
    description:
      "Cosmetic treatments to restore volume and fullness to the face.",
    icon: "Droplet",
  },
  {
    id: "botox",
    title: "BOTOX",
    description:
      "Treatments to reduce facial wrinkles and create a more youthful appearance.",
    icon: "Zap",
  },
  {
    id: "prosthetics",
    title: "DENTAL PROSTHETICS",
    description:
      "Custom-made replacements for missing teeth to restore function and aesthetics.",
    icon: "Layers",
  },
];
