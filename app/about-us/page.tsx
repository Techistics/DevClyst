"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DeveloperStrip from "@/components/DeveloperStrip";
import FAQSection from "@/components/FAQSection";
import { fadeInUpVariant } from "@/lib/animations";

export default function AboutUsPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "HA Lodhii",
      role: "Founder & CEO",
      img: "/her.png",
      remark: "Leads product vision and client strategy end-to-end.", 
    },
    {
      name: "Sohaib Tahir",
      role: "Co-Founder",
      img: "/Sohaib.png",
      position: "10% 0%",
      remark: "Drives growth, partnerships, and business development.",
    },
    {
      name: "Saad Qureshi",
      role: "Full Stack Developer",
      img: "/Boy2.png",
      position: "50% 15%",
      remark: "Builds and ships the core web platform.",
    },
    {
      name: "Omar Farooq",
      role: "Flutter Developer",
      img: "/Boy3.png",
      position: "50% 15%",
      remark: "Crafts fast, native-feeling mobile experiences.",
    },
    {
      name: "Mahnoor Siddiqui",
      role: "Sales Head",
      img: "/Girl1.png",
      position: "50% 15%",
      remark: "Owns client relationships from pitch to close.",
    },
    {
      name: "Iqra Baig",
      role: "Sales Executive",
      img: "/Girl2.png",
      position: "50% 15%",
      remark: "Handles outreach and early client conversations.",
    },
  ];

  const aboutFaqs = [
    { q: "Where is DevClyst based?", a: "DevClyst is based in Pakistan and serves clients across Pakistan, UAE, UK, and globally." },
    { q: "What kind of projects do you take?", a: "We take on SaaS platforms, web applications, mobile apps, CRM systems, e-commerce stores, and custom software of all scales." },
    { q: "Do you work with international clients?", a: "Yes — we actively work with clients from UAE, UK, US, and other countries with full remote collaboration." },
    { q: "How do I get started with DevClyst?", a: "Simply reach out via our Contact page or WhatsApp. We'll schedule a free discovery call to understand your requirements." },
    { q: "What makes DevClyst different?", a: "We combine technical depth with real product thinking. We don't just build what you ask — we help you build what will actually work and scale." }
  ];

  return (
    <>
    <main style={{ minHeight: "100vh", backgroundColor: "transparent", color: "#0a0a0a" }}>
        <section
          style={{
            position: "relative",
            background: "transparent",
            padding: "160px 24px 100px",
            textAlign: "center",
            overflow: "hidden"
          }}
        >
          <motion.div 
            animate={{ y: ["-50%", "-62%", "-50%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: "absolute", 
              left: "2%", 
              top: "55%", 
              zIndex: 1,
              pointerEvents: "none",
              opacity: 0.9
            }}
          >
            <Image 
              src="/object1.png" 
              alt="Floating shape left" 
              width={150} 
              height={150} 
              style={{ objectFit: "contain" }}
            />
          </motion.div>
          <motion.div 
            animate={{ y: ["-50%", "-38%", "-50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: "absolute", 
              right: "2%", 
              top: "40%", 
              zIndex: 1,
              pointerEvents: "none",
              opacity: 0.9
            }}
          >
            <Image 
              src="/object2.png" 
              alt="Floating shape right" 
              width={160} 
              height={160} 
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "clamp(46px, 6.2vw, 76px)",
                lineHeight: 1.15,
                color: "#0b1325",
                margin: 0,
                cursor: "default",
                letterSpacing: "-0.02em"
              }}
            >
              About Us
            </h1>

            <p
              style={{
                color: "#99a1b2",
                fontSize: "18px",
                maxWidth: "760px",
                margin: "32px auto 0",
                lineHeight: 1.6,
                fontWeight: 400,
                fontFamily: "sans-serif"
              }}
            >
              From idea to launch, we design and develop tailor-made websites and apps that scale with your business.
            </p>
          </div>
        </section>
        <DeveloperStrip />
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <section style={{ maxWidth: "860px", margin: "0 auto", padding: "100px 24px", textAlign: "left" }}>
            <h2 style={{ fontFamily: "var(--font-clash), sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", color: "#0a0a0a", marginBottom: "24px" }}>
              Building the Digital Future
            </h2>
            <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: 1.8, marginBottom: "20px", fontFamily: "sans-serif" }}>
              At DevClyst, we believe technology isn't just about code — it's about creating possibilities, building trust, and driving growth. Founded with a vision to empower startups, entrepreneurs, and businesses with powerful digital solutions, we have grown into a fast-moving software agency delivering high-performing digital products that inspire real results.
            </p>
            <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: 1.8, fontFamily: "sans-serif" }}>
              From a small team of passionate developers to a full-service agency working with clients across Pakistan, UAE, and beyond — our journey has always been driven by one mission: to make technology simple, scalable, and impactful.
            </p>
          </section>
          <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px 100px", textAlign: "left" }}>
            <h3 style={{ fontFamily: "var(--font-clash), sans-serif", fontWeight: 700, fontSize: "26px", color: "#0a0a0a", marginBottom: "16px" }}>
              Who We Are
            </h3>
            <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: 1.8, marginBottom: "20px", fontFamily: "sans-serif" }}>
              We are a team of creative developers, designers, and strategists who blend innovation with execution. Our strength lies in deeply understanding every client's vision and turning it into a digital reality — whether it's a SaaS platform, mobile app, CRM system, or a complete business ecosystem.
            </p>
            <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: 1.8, fontFamily: "sans-serif" }}>
              We specialize in both prebuilt solutions (for fast and affordable launches) and custom development (for unique, tailor-made platforms). At DevClyst, every line of code, every design, and every project is created with one clear purpose — to help your business grow online.
            </p>
          </section>
        </motion.div>
        <section style={{ padding: "80px 24px 100px", textAlign: "center", backgroundColor: "#ffffff" }}>
          <div
            style={{
              border: "1px solid #e5e7eb",
              color: "#4b5563",
              borderRadius: "999px",
              padding: "6px 20px",
              fontSize: "13px",
              fontWeight: 500,
              display: "inline-block",
              letterSpacing: "0.02em",
              backgroundColor: "#f9fafb"
            }}
          >
            Our Team
          </div>
          <h2
            style={{
              fontFamily: "var(--font-clash), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 46px)",
              color: "#1e293b",
              marginTop: "20px",
              marginBottom: "56px",
              letterSpacing: "-0.01em"
            }}
          >
            Team Behind Wonders
          </h2>
          <div className="team-grid-track" style={{ maxWidth: "1020px", margin: "0 auto" }}>
            <style jsx>{`
  .team-grid-track {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 1024px) {
    .team-grid-track { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 24px !important; }
  }
  @media (max-width: 640px) {
    .team-grid-track { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
  }
`}</style>

            {teamMembers.map((member, idx) => {
              const isHovered = hoveredMember === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredMember(idx)}
                  onMouseLeave={() => setHoveredMember(null)}
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    aspectRatio: "3 / 3.5",
                    maxWidth: "260px",
                    margin: "0 auto",
                    width: "100%",
                    backgroundColor: "#0a0a0a",
                    cursor: "default",
                    boxShadow: isHovered
                      ? "0 24px 40px -12px rgba(0,0,0,0.35)"
                      : "0 4px 12px -4px rgba(0,0,0,0.08)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0px)",
                    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease"
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, backgroundColor: "#e2e8f0", zIndex: 1 }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: member.position || "50% 15%",
                        transform: isHovered ? "scale(1.07)" : "scale(1)",
                        transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
                      }}
                      priority={idx < 2}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 3,
                      background: isHovered
                        ? "linear-gradient(to top, rgba(4,10,20,0.94) 0%, rgba(4,10,20,0.55) 45%, rgba(4,10,20,0.05) 75%, rgba(4,10,20,0) 100%)"
                        : "linear-gradient(to top, rgba(4,10,20,0.82) 0%, rgba(4,10,20,0.15) 55%, rgba(4,10,20,0) 100%)",
                      transition: "background 0.4s ease",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      zIndex: 4,
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#069BAF",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "scale(1)" : "scale(0.4)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      boxShadow: "0 0 0 4px rgba(6,155,175,0.25)"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 5,
                      padding: "18px 20px",
                      textAlign: "left",
                    }}
                  >
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#ffffff",
                        fontFamily: "sans-serif",
                        letterSpacing: "-0.01em",
                        transform: isHovered ? "translateY(0px)" : "translateY(0px)",
                        transition: "transform 0.4s ease"
                      }}
                    >
                      {member.name}
                    </h4>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#069BAF",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {member.role}
                    </p>
                    <div
                      style={{
                        maxHeight: isHovered ? "60px" : "0px",
                        opacity: isHovered ? 1 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease, margin-top 0.4s ease",
                        marginTop: isHovered ? "8px" : "0px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12.5px",
                          lineHeight: 1.5,
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: "sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {member.remark}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
        <FAQSection faqs={aboutFaqs} />
      </main>
    </>
  );
}