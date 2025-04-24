"use client";

import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was extremely nervous about getting dental implants, but Dr. Ramadani made the entire process comfortable and painless. My new smile looks amazing!",
    name: "Mira K.",
    location: "Prishtina",
    image: "/images/profile1.jpg",
  },
  {
    quote:
      "Dr. Kastrati transformed my smile with orthodontic treatment. The staff was always friendly and professional. I couldn't be happier with the results!",
    name: "Arben M.",
    location: "Ferizaj",
    image: "/images/profile2.jpeg",
  },
  {
    quote:
      "The professional whitening treatment I received at LUDent gave me the confidence to smile again. Thank you for the exceptional care!",
    name: "Elena T.",
    location: "Peja",
    image: "/images/profile3.webp",
  },
];

export function TestimonialSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Patients Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg relative"
          >
            <QuoteIcon className="absolute top-6 left-6 h-10 w-10 text-teal-100" />
            <p className="text-gray-700 italic mb-6 relative z-10">
              {testimonial.quote}
            </p>
            <div className="flex items-center relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
