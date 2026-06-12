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
  const [activeTab, setActiveTab] = useState<"websites" | "applications" | "templates" | "saas">("websites");
  const [hoveredCardImg, setHoveredCardImg] = useState<string | null>(null);
  const [hoveredCardTitle, setHoveredCardTitle] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const projectData: Record<typeof activeTab, Array<{
    id: string;
    title: string;
    img: string;
    link: string;
    bullets: Array<{ num: string; text: string }>;
  }>> = {
    websites: [
      {
        id: "web-1",
        title: "Consulty CRM",
        img: "/consulty.png", 
        link: "https://devclystcrm.vercel.app/",
        bullets: [
          { num: "01", text: "Multi-tenant workspaces with Admin, Pro, and Member roles." },
          { num: "02", text: "Kanban pipeline boards for visual lead management." },
          { num: "03", text: "WhatsApp message logging and follow-up templates built-in." },
          { num: "04", text: "Document checklist, reminders, and analytics dashboard." }
        ]
      },
      {
        id: "web-2",
        title: "Little Fashion Hub",
        img: "/little.png", 
        link: "#",
        bullets: [
          { num: "01", text: "Category-wise product listings with filters and fast search." },
          { num: "02", text: "Quick checkout with discount codes and first-order offers." },
          { num: "03", text: "SEO-friendly structure with dynamic product showcase." },
          { num: "04", text: "Mobile-first responsive design optimised for conversions." }
        ]
      }
    ],
    applications: [
      {
        id: "app-1",
        title: "Food Delivery App",
        img: "/hero.png", 
        link: "#",
        bullets: [
          { num: "01", text: "Customer, restaurant, and driver panels in one system." },
          { num: "02", text: "Real-time order tracking with live map integration." },
          { num: "03", text: "Push notifications and in-app chat support." },
          { num: "04", text: "Flutter-based cross-platform iOS and Android app." }
        ]
      }
    ],
    // Added keys here to fulfill the Record type requirement
    templates: [],
    saas: []
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
            animate={{ y: ["-50%", "-62%", "-50%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", left: "2%", top: "55%", zIndex: 1, pointerEvents: "none", opacity: 0.9 }}
          >
            <Image src="/object1.png" alt="Floating shape left" width={150} height={150} style={{ objectFit: "contain" }} />
          </motion.div>

          {/* Object 2: Right Floating Loop via Framer Motion */}
          <motion.div 
            animate={{ y: ["-50%", "-38%", "-50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", right: "2%", top: "40%", zIndex: 1, pointerEvents: "none", opacity: 0.9 }}
          >
            <Image src="/object2.png" alt="Floating shape right" width={160} height={160} style={{ objectFit: "contain" }} />
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
              Prebuilt Saas Software for <br /> Startups
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
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 12px" }}>
            {projectData[activeTab].map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    alignItems: "center", 
                    gap: "64px", 
                    padding: "55px 0", 
                    maxWidth: "1024px", 
                    margin: "0 auto",
                    flexDirection: isEven ? "row" : "row-reverse" 
                  }}
                >
                  {/* IMAGE CONTAINER */}
                  <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
                    <div
                      onMouseEnter={() => setHoveredCardImg(project.id)}
                      onMouseLeave={() => setHoveredCardImg(null)}
                      style={{
                        width: "100%",
                        maxWidth: "512px",
                        borderRadius: "18px",
                        overflow: "hidden",
                        boxShadow: hoveredCardImg === project.id ? "0 25px 30px -5px rgba(0,0,0,0.12)" : "0 4px 10px rgba(0,0,0,0.04)",
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

                  {/* TEXT CONTENT CONTAINER */}
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
                        View Website →
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

        {/* FAQ SECTION */}
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