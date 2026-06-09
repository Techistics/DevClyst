"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import DeveloperStrip from "@/components/DeveloperStrip";
import FAQSection from "@/components/FAQSection";
import { fadeInUpVariant } from "@/lib/animations";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function PrebuiltPage() {
  const [activeTab, setActiveTab] = useState<"saas" | "templates" | "websites" | "applications">("saas");
  const [hoveredCardImg, setHoveredCardImg] = useState<string | null>(null);
  const [hoveredCardTitle, setHoveredCardTitle] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const projectData = {
    saas: [
      {
        id: "saas-1",
        title: "Techistics CRM",
        img: "/portfolio/techistics.png",
        link: "#",
        bullets: [
          { num: "01", text: "Multi-tenant CRM built for study abroad consultancies." },
          { num: "02", text: "Kanban pipelines, lead tracking, WhatsApp logging built-in." },
          { num: "03", text: "Role-based access: Admin, Pro, and Member workspaces." },
          { num: "04", text: "Document checklist, reminders, analytics — all included." }
        ]
      },
      {
        id: "saas-2",
        title: "Multi-vendor E-commerce",
        img: "/portfolio/ecom.png",
        link: "#",
        bullets: [
          { num: "01", text: "Ready-made multi-vendor marketplace with seller dashboards." },
          { num: "02", text: "Product listings, orders, payments and reviews built-in." },
          { num: "03", text: "Admin panel with full control over vendors and orders." },
          { num: "04", text: "Mobile-first responsive design, ready to deploy in days." }
        ]
      },
      {
        id: "saas-3",
        title: "Booking & Appointment SaaS",
        img: "/portfolio/booking.png",
        link: "#",
        bullets: [
          { num: "01", text: "Online booking system for clinics, salons, and services." },
          { num: "02", text: "Calendar management, slot booking, and reminders." },
          { num: "03", text: "Customer portal and staff management dashboard." },
          { num: "04", text: "Payment integration and automated confirmation emails." }
        ]
      }
    ],
    templates: [
      {
        id: "tpl-1",
        title: "Startup Landing Page",
        img: "/portfolio/landing.png",
        link: "#",
        bullets: [
          { num: "01", text: "High-converting landing page template for startups." },
          { num: "02", text: "Hero, features, testimonials, FAQ and CTA sections included." },
          { num: "03", text: "Animated with Framer Motion for smooth interactions." },
          { num: "04", text: "Built in Next.js — easy to customize and deploy." }
        ]
      },
      {
        id: "tpl-2",
        title: "Agency Portfolio Template",
        img: "/portfolio/agency.png",
        link: "#",
        bullets: [
          { num: "01", text: "Clean portfolio template for creative agencies." },
          { num: "02", text: "Case study pages, team section, and contact form." },
          { num: "03", text: "Dark/light mode, fully responsive design." },
          { num: "04", text: "Next.js + Tailwind — ready to customize in hours." }
        ]
      }
    ],
    // Fallback fallbacks to maintain absolute configuration match with dynamic code types
    websites: [],
    applications: []
  };

  const prebuiltFaqs = [
    { q: "How fast can a prebuilt product be deployed?", a: "Most prebuilt products can be set up and deployed within 3–7 days after onboarding and content collection." },
    { q: "Can I customize the prebuilt product after purchase?", a: "Yes — all prebuilt products are fully customizable. We hand over complete source code so you can modify anything." },
    { q: "Do prebuilt products include source code?", a: "Yes. Full source code and repository access are handed over upon purchase completion." },
    { q: "What is the difference between Prebuilt and Custom?", a: "Prebuilt products are ready-made and launch fast. Custom development is built from scratch for your specific requirements." },
    { q: "Do you provide support after delivery?", a: "Yes — monthly retainer plans are available for updates, bug fixes, and new feature additions." }
  ];

  return (
    <>

      <main style={{ minHeight: "100vh", backgroundColor: "transparent", color: "#0a0a0a" }}>
        
        {/* HERO DISPLAY PANEL */}
        <section
          style={{
            position: "relative",
            background: "transparent",
            padding: "140px 24px 40px",
            textAlign: "center",
            overflow: "hidden"
          }}
        >

          {/* Object 1: Left Floating Loop via Framer Motion */}
          <motion.div 
            animate={{
              y: ["-50%", "-62%", "-50%"],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
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

          {/* Object 2: Right Floating Loop via Framer Motion */}
          <motion.div 
            animate={{
              y: ["-50%", "-38%", "-50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
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
                fontWeight: 600,
                fontSize: "clamp(46px, 6.2vw, 76px)",
                lineHeight: 1.15,
                color: "#0b1325",
                margin: 0,
                cursor: "default",
                letterSpacing: "-0.02em"
              }}
            >
Prebuilt Saas Software for  
              <br />
              Startups
            </h1>

            <p
              style={{
                color: "#99a1b2",
                fontSize: "18px",
                maxWidth: "660px",
                margin: "32px auto 0",
                lineHeight: 1.6,
                fontWeight: 450,
                fontFamily: "sans-serif"
              }}
            >
              Skip the long wait and high costs. Our prebuilt platforms help you go digital faster without compromising on quality.
            </p>
          </div>
        </section>

        {/* INFINITE MOVING STRIP */}
        <DeveloperStrip />

        {/* PROJECTS SECTION */}
        <section style={{ padding: "100px 24px", textAlign: "center", backgroundColor: "#ffffff" }}>
          <div
            style={{
              border: "1px solid #069baf",
              color: "#069baf",
              borderRadius: "999px",
              padding: "4px 18px",
              fontSize: "13px",
              fontWeight: 600,
              display: "inline-block",
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }}
          >
            Prebuilt
          </div>

          <h2
            style={{
              fontFamily: "var(--font-clash), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "#0a0a0a",
              marginTop: "14px",
              marginBottom: "28px"
            }}
          >
            Our Prebuilt Products
          </h2>

          <div style={{ display: "inline-flex", backgroundColor: "#f3f4f6", borderRadius: "999px", padding: "5px", marginBottom: "50px" }}>
            <button
              onClick={() => setActiveTab("saas")}
              style={{
                backgroundColor: activeTab === "saas" ? "#fff" : "transparent",
                borderRadius: "999px",
                boxShadow: activeTab === "saas" ? "0 2px 4px rgba(6, 155, 175, 0.15)" : "none",
                color: activeTab === "saas" ? "rgba(6, 155, 175, 1)" : "#9ca3af",
                fontWeight: activeTab === "saas" ? 600 : 500,
                padding: "10px 32px",
                fontSize: "15px",
                border: "none",
                cursor: "pointer"
              }}
            >
              SaaS Products
            </button>
            <button
              onClick={() => setActiveTab("templates")}
              style={{
                backgroundColor: activeTab === "templates" ? "#fff" : "transparent",
                borderRadius: "999px",
                boxShadow: activeTab === "templates" ? "0 2px 4px rgba(6, 155, 175, 0.15)" : "none",
                color: activeTab === "templates" ? "#069baf" : "#9ca3af",
                fontWeight: activeTab === "templates" ? 600 : 500,
                padding: "10px 32px",
                fontSize: "15px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Web Templates
            </button>
          </div>

          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 12px" }}>
            {projectData[activeTab as "saas" | "templates"].map((project) => {
              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "64px", padding: "55px 0", maxWidth: "1024px", margin: "0 auto" }}
                >
                  <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
                    <div
                      onMouseEnter={() => setHoveredCardImg(project.id)}
                      onMouseLeave={() => setHoveredCardImg(null)}
                      style={{
                        width: "100%",
                        maxWidth: "512px",
                        borderRadius: "18px",
                        overflow: "hidden",
                        boxShadow: hoveredCardImg === project.id ? "0 25px 30px -5px rgba(6, 155, 175, 0.15)" : "0 4px 10px rgba(0,0,0,0.04)",
                        transform: hoveredCardImg === project.id ? "scale(1.02)" : "scale(1)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease"
                      }}
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={512}
                        height={340}
                        style={{ width: "100%", height: "340px", objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  <div style={{ flex: "1 1 400px", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3
                      onMouseEnter={() => setHoveredCardTitle(project.id)}
                      onMouseLeave={() => setHoveredCardTitle(null)}
                      style={{ fontFamily: "var(--font-clash), sans-serif", fontWeight: 700, fontSize: "26px", color: hoveredCardTitle === project.id ? "#069baf" : "#0a0a0a", transition: "color 0.3s ease", margin: "0 0 22px 0" }}
                    >
                      {project.title}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                      {project.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} style={{ display: "flex", alignItems: "flex-start" }}>
                          <span style={{ color: "#069baf", fontWeight: 700, minWidth: "36px", fontSize: "16px" }}>{bullet.num}</span>
                          <span style={{ color: "#4b5563", fontSize: "14.5px", lineHeight: 1.65 }}>{bullet.text}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <Link
                        href={project.link}
                        onMouseEnter={() => setHoveredLink(project.id)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{ color: hoveredLink === project.id ? "#069baf" : "#0a0a0a", fontWeight: 600, fontSize: "14.5px", textDecoration: hoveredLink === project.id ? "underline" : "none", transition: "color 0.2s ease" }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <TestimonialsSection/>
        </motion.div>

        {/* FAQ SECTION WITH ON-SCROLL ENTRY REVEAL */}
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FAQSection faqs={prebuiltFaqs} />
        </motion.div>
      </main>
    </>
  );
}