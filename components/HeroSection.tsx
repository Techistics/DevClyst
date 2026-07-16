"use client";

import { useState } from "react"; // Imported useState to handle the hover state cleanly
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  // State to track hover on the "Let's Explore" button
  const [isExploreHovered, setIsExploreHovered] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        background: "transparent",
        paddingTop: "0",
        marginTop: "-48px",
        paddingBottom: "40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          style={{
            width: '100%',
            maxWidth: '460px',
            height: '380px',
            marginTop: '54px', 
            marginBottom: '-100px',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          <Image
            src="/hero.png"
            alt="DevClyst founders"
            width={380}
            height={460}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: '50% 15%',
              display: 'block',
            }}
            priority
          />
        </motion.div>

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-clash), sans-serif",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 350, 
              lineHeight: 1.0,
              color: "#0a0a0a",
              margin: 0,
              textAlign: "center",
            }}
          >
            Build your Startup
            <br />
            with <span style={{ color: "#069BAF" }}>DevClyst</span>
          </h1>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <Link
            href="/customized"
            onMouseEnter={() => setIsExploreHovered(true)}
            onMouseLeave={() => setIsExploreHovered(false)}
            style={{
              background: isExploreHovered ? "#069BAF" : "#0a0a0a",
              color: "#fff",
              borderRadius: "999px",
              padding: "12px 28px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          >
            Let&apos;s Explore
          </Link>
          <Link
            href="/contact"
            style={{
              background: "#fff",
              color: "#0a0a0a",
              border: "2px solid #0a0a0a",
              borderRadius: "999px",
              padding: "12px 28px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Contact Us
          </Link>
        </motion.div>

        {/* TRUSTED TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          style={{
            marginTop: "16px",
            fontSize: "13px",
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          Trusted by 50+ Clients
        </motion.p>
      </div>
    </section>
  );
}