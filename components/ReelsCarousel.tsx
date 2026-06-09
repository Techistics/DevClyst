"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const reels = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
];

export default function ReelsCarousel() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reels.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex, itemsPerPage]);

  return (
    <section className="py-20 bg-white w-full px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center relative">
        
        {/* Pill Label */}
        <div className="flex justify-center mb-6">
          <span className="border border-gray-300 bg-white rounded-full px-4 py-1 text-sm text-gray-500 font-medium shadow-sm">
            Social Presence
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-[#0a0a0a] text-center font-bold mb-12 tracking-tight"
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.1,
          }}
        >
          Trusted by 10k+ People
        </h2>

        {/* Carousel Container */}
        <div 
          className="relative w-full flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Prev Button (Desktop) */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 z-10 -ml-6 lg:-ml-12 w-12 h-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors focus:outline-none shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel Track */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              style={{ width: `${(reels.length / itemsPerPage) * 100}%` }}
            >
              {reels.map((reel) => (
                <div 
                  key={reel.id} 
                  className="px-4"
                  style={{ width: `${100 / reels.length}%` }}
                >
                  <div className="relative w-full aspect-[9/16] max-h-[400px] max-w-[225px] bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-md mx-auto border border-gray-800">
                    <Instagram className="w-12 h-12 text-white/40 mb-4" />
                    <span className="text-white/40 font-medium text-sm">Instagram Reel</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next Button (Desktop) */}
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 z-10 -mr-6 lg:-mr-12 w-12 h-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors focus:outline-none shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile controls (Arrows) */}
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
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
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
