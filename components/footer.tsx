import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <section className="py-16 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/image2.jpg"
            alt="Dental Treatment Room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/60"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">
              Schedule Your Appointment Today
            </h2>
            <p className="text-teal-100 md:text-lg">
              Our doctors are ready to provide you with exceptional dental care
              tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/appointment">
                <Button
                  size="lg"
                  className="bg-white text-teal-900 hover:bg-teal-50"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto pt-20 pb-6 md:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="LUDent"
                width={180}
                height={72}
                className="h-14 w-auto"
              />
            </Link>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574998987328"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-teal-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/ludentclinic/"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-teal-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-px after:w-12 after:bg-teal-500">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/zdbd9VE9a5vX9kM89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-600 transition-colors"
                >
                  Rr. Reçaku
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+383 44 900 110</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  ludentdentalclinic@gmail.com
                </span>
              </div>
              <span className="text-gray-400">Mon - Sat: 10:00 - 19:00</span>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-px after:w-12 after:bg-teal-500">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/services"
                className="text-gray-400 hover:text-teal-300 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-teal-300 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/doctors"
                className="text-gray-400 hover:text-teal-300 transition-colors"
              >
                Our Doctors
              </Link>
            </nav>
            <Link
              href="/appointment"
              className="inline-flex items-center text-teal-300 font-medium group"
            >
              BOOK A CONSULTATION{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-6">
            <div className="w-full h-[200px] rounded-md overflow-hidden shadow-lg border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4821.280920230085!2d21.15065695273744!3d42.37777553789901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13547fe8839357d1%3A0xe98541b41364e3fb!2sLU%20DENT%20DENTAL%20CLINIC!5e0!3m2!1sen!2s!4v1745505510798!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} LUDent Dental Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
