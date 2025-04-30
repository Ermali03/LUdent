import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatsCounter } from "@/components/stats-counter";
import { BookConsultation } from "@/components/book-consultation";
import { ServiceCard } from "@/components/service-card";
import { TestimonialSection } from "@/components/testimonial-slider";
import { ParallaxSection } from "@/components/parallax-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/image5.jpg"
            alt="LUDent Clinic Exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-900/70"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-32 md:py-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-block">
                <span className="text-xs tracking-widest text-teal-300 uppercase font-medium">
                  Premium Dental & Aesthetic Care
                </span>
                <div className="h-px w-20 bg-teal-500 mt-2"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                <span className="block">CARING FOR</span>
                <span className="block">YOUR SMILE</span>
                <span className="block">
                  AND <span className="text-teal-300">HEALTH</span>
                </span>
              </h1>
              <p className="text-teal-100 text-lg max-w-md">
                Experience exceptional dental care where advanced technology
                meets artistic precision for your perfect smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/appointment">
                  <Button
                    size="lg"
                    className="bg-white text-teal-900 hover:bg-teal-50 rounded-none px-8"
                  >
                    BOOK APPOINTMENT
                  </Button>
                </Link>
                <Link
                  href="/services"
                  className="group flex items-center text-white font-medium"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-2xl">
                <Image
                  src="/images/image1.jpg"
                  alt="Modern dental equipment"
                  width={600}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Rest of the home page content remains the same */}
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="hidden md:block absolute -top-6 -left-6 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
              <div className="hidden md:block absolute -bottom-6 -right-6 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
              <div className="relative">
                <div className="hidden md:block absolute inset-0 border border-teal-200 -translate-x-4 -translate-y-4"></div>
                <Image
                  src="/images/luxury.jpeg"
                  alt="Dr. Olta's treatment room"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[600px]"
                />
                <div className="absolute bottom-8 right-8 bg-white px-6 py-4 shadow-xl">
                  <span className="text-xs tracking-widest text-teal-800 uppercase font-medium">
                    Innovative Technologies
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-xs tracking-widest text-teal-800 uppercase font-medium">
                  About Us
                </span>
                <div className="h-px w-20 bg-teal-500 mt-2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                YOUR SMILE <br />
                <span className="text-teal-600">DESERVES</span> THE <br />
                EXCELLENCE
              </h2>
              <p className="text-gray-600 text-lg">
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
                We use modern technology and advanced techniques to ensure you
                receive the best care possible. At LU Dent, your smile is in
                good hands! Today, LUDent is equipped with state-of-the-art
                technology and offers a comprehensive range of dental services,
                from routine check-ups to advanced cosmetic and restorative
                procedures.
              </p>
              <div className="pt-4">
                <BookConsultation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection />

      {/* Services Preview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <span className="text-xs tracking-widest text-teal-800 uppercase font-medium">
                  Our Services
                </span>
                <div className="h-px w-20 bg-teal-500 mx-auto mt-2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                PREMIUM DENTAL SERVICES
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of dental services to meet all
                your oral health needs, delivered with precision and artistry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="text-teal-800 border-teal-800 hover:bg-teal-50 rounded-none px-8 py-6"
                >
                  VIEW ALL SERVICES
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <span className="text-xs tracking-widest text-teal-800 uppercase font-medium">
                  State-of-the-Art
                </span>
                <div className="h-px w-20 bg-teal-500 mx-auto mt-2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                ADVANCED TECHNOLOGY
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our clinic is equipped with the latest dental technology to
                provide you with the highest quality care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/images/image3.jpg"
                  alt="Advanced dental equipment"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">Precision Equipment</h3>
                  <p className="text-teal-100 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Our advanced dental tools ensure precise and comfortable
                    treatments.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/images/image2.jpg"
                  alt="Modern treatment room"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">Comfortable Environment</h3>
                  <p className="text-teal-100 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Our treatment rooms are designed for maximum comfort during
                    your visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="text-xs md:text-sm tracking-widest text-teal-800 uppercase font-medium">
                  Testimonials
                </span>
                <div className="h-px w-16 md:w-20 bg-teal-500 mx-auto mt-2"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                WHAT OUR PATIENTS SAY
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
                Discover why our patients trust us with their smiles and keep
                coming back for all their dental needs.
              </p>
            </div>

            {/* Testimonial Slider */}
            <div className="w-full">
              <TestimonialSection />
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Interior */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-xs tracking-widest text-teal-800 uppercase font-medium">
                  Our Clinic
                </span>
                <div className="h-px w-20 bg-teal-500 mt-2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                LUXURY <br />
                <span className="text-teal-600">ENVIRONMENT</span>
              </h2>
              <p className="text-gray-600">
                Our clinic is designed to provide a calming and luxurious
                environment. From the moment you step in, you'll experience the
                perfect blend of comfort and sophistication.
              </p>
              <p className="text-gray-600">
                We believe that a relaxing atmosphere contributes significantly
                to a positive dental experience, which is why we've created a
                space that feels more like a spa than a traditional dental
                office.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute inset-0 border border-teal-200 translate-x-4 translate-y-4"></div>
              <Image
                src="/images/image6.jpg"
                alt="LUDent clinic Elements"
                width={600}
                height={700}
                className="object-cover w-full h-[500px] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <span className="text-xs tracking-widest text-teal-800 uppercase font-medium">
                  Our Specialists
                </span>
                <div className="h-px w-20 bg-teal-500 mx-auto mt-2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                MEET OUR DOCTORS
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team of experienced dental professionals is dedicated to
                providing you with exceptional care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="group">
                <div className="overflow-hidden">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                      <div className="text-white space-y-2">
                        <p className="text-sm text-teal-100">
                          With over 15 years of experience, Dr. Ramadani has
                          placed more than 2,000 implants and performed
                          countless cosmetic procedures.
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/images/arlind.jpeg"
                      alt="Dr. Arlind Ramadani"
                      width={500}
                      height={700}
                      className="object-cover w-full h-[600px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-2">
                  <h3 className="text-2xl font-bold">Dr. Arlind Ramadani</h3>
                </div>
              </div>

              <div className="group">
                <div className="overflow-hidden">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                      <div className="text-white space-y-2">
                        <p className="text-sm text-teal-100">
                          Dr. Kastrati is certified in Invisalign and other
                          modern orthodontic techniques, helping patients
                          achieve beautiful, aligned smiles.
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/images/olta.jpeg"
                      alt="Dr. Olta Kastrati"
                      width={500}
                      height={700}
                      className="object-cover w-full h-[600px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-2">
                  <h3 className="text-2xl font-bold">Dr. Olta Kastrati</h3>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/doctors">
                <Button
                  variant="outline"
                  className="text-teal-800 border-teal-800 hover:bg-teal-50 rounded-none px-8 py-6"
                >
                  MEET OUR TEAM
                </Button>
              </Link>
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
    id: "whitening",
    title: "PROFESSIONAL WHITENING",
    description:
      "Advanced teeth whitening treatments for a brighter, more confident smile.",
    icon: "Sparkles",
  },
  {
    id: "botox",
    title: "BOTOX",
    description:
      "Treatments to reduce facial wrinkles and create a more youthful appearance.",
    icon: "Zap",
  },
  {
    id: "filler",
    title: "DERMAL FILLERS",
    description:
      "Cosmetic treatments to restore volume and fullness to the face.",
    icon: "Droplet",
  },
];
