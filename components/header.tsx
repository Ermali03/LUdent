"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Doctors", href: "/doctors" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-teal-900/95  shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-10">
            <Image
              src="/images/logo.png"
              alt="LUDent"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-teal-300 ${
                    pathname === item.href ? "text-teal-300" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <Link href="/appointment">
                <Button className="rounded-none bg-white hover:bg-teal-50 text-teal-900">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>

          <button className="md:hidden z-10" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-teal-900 text md:hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex h-24 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="LUDent"
                  width={150}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>

              <button onClick={toggleMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-8 py-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-2xl font-medium ${
                    pathname === item.href ? "text-teal-600" : "text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-8 space-y-4">
                <Link href="/appointment" onClick={toggleMenu}>
                  <Button className="w-full rounded-none bg-teal-600 hover:bg-teal-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
