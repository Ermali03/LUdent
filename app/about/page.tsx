import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { BookConsultation } from "@/components/book-consultation";
import { StatsCounter } from "@/components/stats-counter";
import { HeroSectionWithOverlay } from "@/components/hero-section-with-overlay";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSectionWithOverlay
        title="ABOUT US"
        imageSrc="/images/image4.jpg"
        height="small"
      >
        <p className="text-teal-100 text-lg">
          A modern dental clinic where advanced technologies are combined with
          an individual approach to each patient.
        </p>
      </HeroSectionWithOverlay>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCounter value={56} suffix="+" label="COMMITTED TO CARE" />
            <StatsCounter value={95} suffix="+" label="ALREADY ENOUGH SMILES" />
            <StatsCounter
              value={100}
              suffix="%"
              label="VERY QUALITY TREATMENT"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">
                YOUR SMILE <br />
                <span className="text-teal-600">DESERVES</span> THE <br />
                EXCELLENCE
              </h2>
              <p className="text-gray-600">
                Founded in 2025 by Dr. Arlind & Dr. Olta, LUDent Dental Clinic
                began with a simple mission: to provide the highest quality
                dental care in a comfortable, patient-centered environment. Over
                the years, we've grown from a small practice to one of the
                leading dental clinics in Kosovo.
              </p>
              <p className="text-gray-600">
                Whether you are visiting us for a routine check-up or a complete
                smile makeover, your comfort and satisfaction are our top
                priorities.
              </p>
              <p className="text-gray-600">
                Today, LUDent is equipped with state-of-the-art technology and
                offers a comprehensive range of dental services, from routine
                check-ups to advanced cosmetic and restorative procedures.
              </p>
              <BookConsultation />
            </div>
            <div className="relative">
              <Image
                src="/images/image6.jpg"
                alt="LUDent Dental Clinic"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              OUR SERVICES
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">General Dentistry</h3>
                <p className="text-gray-600">
                  Routine exams, dental cleanings, fillings, and preventive
                  care.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Cosmetic Dentistry</h3>
                <p className="text-gray-600">
                  Teeth whitening, veneers, and smile design to enhance your
                  appearance.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Orthodontics</h3>
                <p className="text-gray-600">
                  Traditional braces and clear aligners (e.g., Invisalign) for
                  straightening teeth.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Pediatric Dentistry</h3>
                <p className="text-gray-600">
                  Gentle and friendly dental care for children of all ages.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Dental Implants</h3>
                <p className="text-gray-600">
                  Permanent solutions for missing teeth with natural-looking
                  results.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Crowns & Bridges</h3>
                <p className="text-gray-600">
                  Restoring damaged or missing teeth with durable, aesthetic
                  solutions.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Root Canal Treatment</h3>
                <p className="text-gray-600">
                  Saving infected teeth with precise and painless endodontic
                  care.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Emergency Dentistry</h3>
                <p className="text-gray-600">
                  Fast and effective care for dental emergencies and toothaches.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-lg">
                We use modern technology and advanced techniques to ensure you
                receive the best care possible. At LU Dent, your smile is in
                good hands!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              OUR VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-teal-600 text-white flex items-center justify-center">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">PATIENT-CENTERED CARE</h3>
                <p className="text-gray-600">
                  We prioritize your comfort and satisfaction, tailoring our
                  approach to meet your unique needs and preferences.
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-teal-600 text-white flex items-center justify-center">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">CLINICAL EXCELLENCE</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of clinical practice,
                  continuously updating our skills and techniques.
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-teal-600 text-white flex items-center justify-center">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">CONTINUOUS EDUCATION</h3>
                <p className="text-gray-600">
                  We invest in ongoing education and training to stay at the
                  forefront of dental advancements.
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-teal-600 text-white flex items-center justify-center">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">COMPASSIONATE SERVICE</h3>
                <p className="text-gray-600">
                  We approach every patient with empathy and understanding,
                  creating a supportive environment for your care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
