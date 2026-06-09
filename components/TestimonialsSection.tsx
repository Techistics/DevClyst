"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "DevClyst built our CRM from scratch — it completely transformed how we manage students.",
    name: "Ahmed K.",
    role: "Study Abroad Consultancy",
  },
  {
    id: 2,
    quote: "Fast delivery, clean code, and they truly understood our business needs.",
    name: "Sara M.",
    role: "E-commerce Founder",
  },
  {
    id: 3,
    quote: "Outstanding work. Our mobile app hit 5 stars on the Play Store within a month.",
    name: "Raza T.",
    role: "Logistics Startup",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-24 px-4 w-full bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center relative">

        {/* Pill Label */}
        <div className="flex justify-center mb-6">
          <span className="border border-gray-300 bg-white rounded-full px-4 py-1 text-sm text-gray-500 font-medium shadow-sm">
            Client Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-[#0a0a0a] text-center font-bold mb-12 tracking-tight"
          style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1 }}
        >
          Happy Clients Testimonials
        </h2>

        {/* Carousel Container */}
        <div
          className="relative w-full flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 lg:left-8 z-10 w-12 h-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors focus:outline-none shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Track Wrapper */}
          <div style={{ width: "100%", maxWidth: "672px", overflow: "hidden" }}>
  <motion.div
    animate={{ x: `-${currentIndex * 100}%` }}
    transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
    style={{ display: "flex", willChange: "transform" }}
  >
    {testimonials.map((testi) => (
      <div
        key={testi.id}
        style={{ minWidth: "100%", width: "100%", flexShrink: 0, padding: "0 8px", boxSizing: "border-box" }}
      >
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col w-full h-full min-h-[280px]">

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-[16px] leading-[1.7] italic mb-8 flex-1">
                      &ldquo;{testi.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#0a0a0a] font-bold tracking-wide">
                        {testi.name.split(" ")[0][0]}{testi.name.split(" ")[1]?.[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#0a0a0a] font-sans">
                          {testi.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {testi.role}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 lg:right-8 z-10 w-12 h-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors focus:outline-none shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors focus:outline-none shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors focus:outline-none shadow-sm"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                currentIndex === idx ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}