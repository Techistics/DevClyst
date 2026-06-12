"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- ANIMATED INFINITE MOVING STRIP ---
function DeveloperStrip() {
  const items = [
    "Develop it from Best",
    "Develop it Once"
  ];
  
  const loopSequence = Array(12).fill(items).flat();

  return (
    <div 
      style={{ 
        background: "#161616", 
        overflow: "hidden", 
        padding: "24px 0", 
        width: "100%",
        display: "flex",
        position: "relative",
        alignItems: "center"
      }}
    >
      <style jsx global>{`
        @keyframes customMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sliding-marquee-track {
          display: flex;
          white-space: nowrap;
          gap: 32px;
          animation: customMarquee 28s linear infinite;
          width: max-content;
          align-items: center;
        }
      `}</style>

      <div className="sliding-marquee-track">
        {loopSequence.map((text, index) => (
          <div 
            key={index} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "32px", 
              color: "#ffffff", 
              fontSize: "25px", 
              fontWeight: 500,
              fontFamily: "sans-serif",
              letterSpacing: "-0.01em"
            }}
          >
            <span>{text}</span>
            <span style={{ color: "#ffffff", opacity: 0.6, fontSize: "20px" }}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    { q: "How long does a customized project take?", a: "Typically, a custom project takes anywhere between 4 to 12 weeks depending on complexity, features, and integrations required." },
    { q: "Do you provide post-launch maintenance?", a: "Yes, we provide ongoing support, security monitoring, and regular updates to ensure your product performs optimally." },
    { q: "Will I own the complete source code?", a: "Absolutely. Once the final milestone is cleared, 100% intellectual property ownership and source code are handed over to you." }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "100px 24px", textAlign: "left" }}>
      <h2 style={{ fontFamily: "var(--font-clash), sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, textAlign: "center", marginBottom: "48px", color: "#0a0a0a" }}>
        Frequently Asked Questions
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{ 
                width: "100%", 
                display: "flex", 
                alignItems: "center", 
                background: "none", 
                border: "none", 
                cursor: "pointer", 
                padding: "12px 0", 
                textAlign: "left", 
                outline: "none", 
                justifyContent: "space-between" 
              }}
            >
              <span style={{ fontFamily: "var(--font-clash), sans-serif", fontSize: "19px", fontWeight: 600, color: hoveredIdx === i || openIndex === i ? "#069baf" : "#0a0a0a", transition: "color 0.2s ease" }}>
                {faq.q}
              </span>
              <span style={{ color: "#069baf", fontSize: "24px", fontWeight: "bold" }}>
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <p style={{ color: "#4b5563", fontSize: "15px", lineHeight: 1.6, marginTop: "12px", paddingRight: "24px" }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// --- MAIN CUSTOMIZED PAGE COMPONENT ---
export default function CustomizedPage() {
  const [activeTab, setActiveTab] = useState<"websites" | "applications">("websites");
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
      title: "Khaadi E-commerce",
      img: "/khaadi.png", 
      link: "https://emart-two-red.vercel.app/",
      bullets: [
        { num: "01", text: "Category-wise product listings with filters and fast search." },
        { num: "02", text: "Quick checkout with discount codes and first-order offers." },
        { num: "03", text: "SEO-friendly structure with dynamic product showcase." },
        { num: "04", text: "Mobile-first responsive design optimised for conversions." }
      ]
    },
    {
      id: "web-3",
      title: "Hexashop Online Shopping",
      img: "/hexa.png", // Replace with your actual public asset path
      link: "#",
      bullets: [
        { num: "01", text: "Clean, creative grid layout for broad departmental category showcases." },
        { num: "02", text: "Dedicated collection landing interfaces for Men, Women, Kids, and Accessories." },
        { num: "03", text: "Streamlined modern user profile controls with seamless client-side navigation." },
        { num: "04", text: "Highly structured product cards designed to increase user click-through rates." }
      ]
    },
    {
      id: "web-4",
      title: "Little Fashion Hub",
      img: "/little.png", // Replace with your actual public asset path
      link: "#",
      bullets: [
        { num: "01", text: "Elegant, minimalist storefront design emphasizing lifestyle brand storytelling." },
        { num: "02", text: "Interactive sliding interactive story elements to drive user discovery." },
        { num: "03", text: "Simplified product discovery modules tailored for custom outfits and accessories." },
        { num: "04", text: "Fluid layout transitions with custom theme-conscious design details." }
      ]
    }
  ],
  applications: [
    {
      id: "app-1",
      title: "Finjex SaaS Platform",
      img: "/finjex.png",
      link: "#",
      bullets: [
        { num: "01", text: "Customer, relational, investor, and partner panels in one system." },
        { num: "02", text: "Real-time tracking of deals and live notifications ." },
        { num: "03", text: "Email notifications, chat support, and integrated task management." },
        { num: "04", text: "AI-driven analytics that show trends and future projections." }
      ]
    }
  ],
};

  // Explicitly declared type to prevent any TypeScript compiling issues
  const fadeInUpVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <>

      <main style={{ minHeight: "100vh", backgroundColor: "transparent", color: "#0a0a0a" }}>
        
        {/* MATCHED HERO DISPLAY PANEL */}
        <section
          style={{
            position: "relative",
            background: "transparent",
            padding: "160px 24px 100px",
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
                fontWeight: 700,
                fontSize: "clamp(46px, 6.2vw, 76px)",
                lineHeight: 1.15,
                color: "#0b1325",
                margin: "-50px",
                cursor: "default",
                letterSpacing: "-0.02em"
              }}
            >
              Customized Development
              <br />
              From Scratch
            </h1>

            <p
              style={{
                color: "#99a1b2",
                fontSize: "18px",
                maxWidth: "760px",
                margin: "60px auto -50px",
                lineHeight: 1.6,
                fontWeight: 400,
                fontFamily: "sans-serif"
              }}
            >
              We transform your unique ideas into powerful, scalable applications. Our 
              team crafts tailor-made software solutions designed specifically for your 
              business needs, from the first line of code to the final launch.
            </p>
          </div>
        </section>

        {/* INFINITE MOVING STRIP */}
        <DeveloperStrip />

        {/* PROJECTS SECTION */}
        <section style={{ padding: "100px 24px", textAlign: "center" , backgroundColor: "#ffffff"}}>
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
            Projects
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
            Our Top Projects
          </h2>

          <div style={{ display: "inline-flex", backgroundColor: "#f3f4f6", borderRadius: "999px", padding: "5px", marginBottom: "50px" }}>
            <button
              onClick={() => setActiveTab("websites")}
              style={{
                backgroundColor: activeTab === "websites" ? "#fff" : "transparent",
                borderRadius: "999px",
                boxShadow: activeTab === "websites" ? "0 2px 4px rgba(0,0,0,0.06)" : "none",
                color: activeTab === "websites" ? "#069baf" : "#9ca3af",
                fontWeight: activeTab === "websites" ? 600 : 500,
                padding: "10px 32px",
                fontSize: "15px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              style={{
                backgroundColor: activeTab === "applications" ? "#fff" : "transparent",
                borderRadius: "999px",
                boxShadow: activeTab === "applications" ? "0 2px 4px rgba(0,0,0,0.06)" : "none",
                color: activeTab === "applications" ? "#069baf" : "#9ca3af",
                fontWeight: activeTab === "applications" ? 600 : 500,
                padding: "10px 32px",
                fontSize: "15px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Applications
            </button>
          </div>

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
        // Alternates between standard row and reversed row layout
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

        {/* FAQ SECTION WITH ON-SCROLL ENTRY REVEAL */}
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FAQSection />
        </motion.div>
      </main>

    </>
  );
}