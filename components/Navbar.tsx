"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Prebuilt", href: "/prebuilt" },
    { name: "Customized", href: "/customized" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="relative z-40 ">
      <div className="w-full px-4 pt-6 pb-2">
        <div className="mx-auto max-w-3xl bg-white border border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm rounded-full">

          {/* Desktop Left Links */}
          <div className="hidden md:flex items-center space-x-6 flex-1">
            <Link
              href="/prebuilt"
              className="text-[15px] font-medium text-black hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Prebuilt
            </Link>
            <Link
              href="/customized"
              className="text-[15px] font-medium text-black hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Customized
            </Link>
          </div>

          {/* Mobile Left Spacer */}
          <div className="md:hidden flex-1"></div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center px-4">
            <Link
              href="/"
              className="group text-3xl font-extrabold tracking-wide select-none"
            >
              <span className="text-black group-hover:text-[#069BAF] transition-colors duration-300">
                Dev
              </span>
              <span className="text-[#069BAF] group-hover:text-black transition-colors duration-300">
                Clyst
              </span>
            </Link>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <Link
              href="/about-us"
              className="text-[15px] font-medium text-black hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-[15px] font-medium text-black hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex flex-1 justify-end items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-white rounded-2xl border border-gray-200 shadow-lg p-4 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-medium text-gray-800 hover:text-black transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}