import Link from "next/link";
import { ChevronRight, Instagram } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { DoctorCard } from "@/components/doctor-card";
import { HeroSectionWithOverlay } from "@/components/hero-section-with-overlay";

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSectionWithOverlay
        title="MEET OUR DOCTORS"
        imageSrc="/images/image6.jpg"
        height="small"
      >
        <p className="text-teal-100 text-lg">
          Experienced professionals dedicated to providing exceptional dental
          care.
        </p>
      </HeroSectionWithOverlay>

      {/* Doctors Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <DoctorCard
                name="Dr. Arlind Ramadani"
                specialty="Implantology & Cosmetic Dentistry"
                bio="I graduated from the University of Prishtina in 2021, marking the beginning of a journey rooted in passion, precision, and a deep commitment to dental care. Since then, I’ve continually expanded my expertise by participating in numerous specialized courses across the country, staying at the forefront of modern techniques and innovations in dentistry.                "
                imageSrc="/images/arlind.jpeg"
                instagramURL="https://www.instagram.com/arlindramadani/"
              />

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Professional Journey</h3>
                <p className="text-gray-600 mb-4">
                  My professional path began at the Ferizaj Hospital, where I
                  gained invaluable clinical experience in a fast-paced,
                  multidisciplinary environment. After that, I continued my
                  journey at a respected dental clinic in Prishtina, where I
                  worked for three years—refining my skills and providing
                  high-quality care to a wide range of patients.
                </p>
                <p className="text-gray-600">
                  I believe that dentistry is more than just clinical
                  practice—it's about understanding each patient's unique needs
                  and delivering personalized solutions with a gentle touch and
                  a keen eye for aesthetics. Whether it's a routine check-up or
                  a transformative smile makeover, I approach every case with
                  dedication and empathy.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Philosophy</h3>
                <p className="text-gray-600 mb-4">
                  When I'm not in the clinic, I'm often exploring new
                  advancements in dental science, attending hands-on workshops,
                  or sharing knowledge with fellow professionals. My goal is to
                  create an environment where patients feel heard, comfortable,
                  and confident in their care.
                </p>
                <p className="text-gray-600 font-medium italic">
                  "Let's build your healthiest, most confident smile—together."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <DoctorCard
                name="Dr. Olta Kastrati"
                specialty="Orthodontics & Aesthetic Dentistry"
                bio="I'm Dr. Olta Kastrati, a dedicated dental professional who graduated from the University of Prishtina in 2021. Since then, I've continually invested in my professional development, completing numerous specialized courses in endodontics, orthodontics, laser dentistry, and facial aesthetics—including dermal fillers and Botox—focusing particularly on aesthetic treatments that enhance natural beauty."
                imageSrc="/images/olta.jpeg"
                instagramURL="https://www.instagram.com/oltakastrati/"
              />

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Professional Journey</h3>
                <p className="text-gray-600">
                  My career began in the city of Peja, where I worked for two
                  years, gaining hands-on experience and deepening my
                  understanding of patient care in a diverse clinical
                  environment. Following that, I spent the next two years at a
                  private maxillofacial polyclinic in Ferizaj, where I
                  collaborated with a multidisciplinary team and worked with
                  more complex cases in both dental and aesthetic procedures.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Philosophy</h3>
                <p className="text-gray-600 mb-4">
                  My philosophy combines clinical excellence with a personal
                  approach. I believe that dentistry isn't just about treating
                  teeth—it's about helping people feel more confident,
                  comfortable, and cared for. From root canals to smile design,
                  and from orthodontic adjustments to minimally invasive facial
                  rejuvenation, my focus is on achieving results that are both
                  functional and naturally beautiful.
                </p>
                <p className="text-gray-600 mb-4">
                  Outside the clinic, I remain actively involved in continuing
                  education, hands-on training, and staying up-to-date with the
                  latest innovations in both dental and aesthetic practices. I
                  strive to create an environment where patients feel safe,
                  supported, and empowered in every step of their treatment
                  journey.
                </p>
                <p className="text-gray-600 font-medium italic">
                  "Let's create a smile—and a confidence—you'll love."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
