"use client";

import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";

const sections = [
  {
    title: "1. Introduction",
    content: "Welcome to DevClyst. These Terms and Conditions govern your use of our website and services, including our pre-built applications and custom development projects. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.",
    bullets: undefined
  },
  {
    title: "2. Services & Delivery",
    content: "We provide both pre-built software solutions and custom development services. Specific deliverables, timelines, and costs are outlined in your individual project agreement or invoice.",
    bullets: [
      "Pre-built Solutions: Delivered as described on our product pages.",
      "Custom Development: Timelines are estimates and subject to the prompt provision of materials by the client."
    ]
  },
  {
    title: "3. Intellectual Property",
    content: "Upon full payment, DevClyst transfers full ownership of the code to the client as specified in our agreement. Until final payment is processed, all code, designs, and assets remain the property of DevClyst. You are granted a limited license to use our services for personal or business use, subject to these restrictions.",
    bullets: undefined
  },
  {
    title: "4. Payment Terms",
    content: "Payments are due upon receipt of invoice unless otherwise agreed. We reserve the right to suspend services or withhold delivery of source code for overdue accounts.",
    bullets: undefined
  },
  {
    title: "5. Limitation of Liability",
    content: "In no event shall DevClyst, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    bullets: undefined
  },
  {
    title: "6. Contact Us",
    content: "If you have any questions about these Terms, please contact us at: devclyst@gmail.com",
    bullets: undefined
  }
];

export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "transparent" }}>

      {/* HERO */}
      <section style={{ padding: "160px 24px 60px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-clash), sans-serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            color: "#0a0a0a",
            margin: 0
          }}
        >
          Terms & Conditions
        </h1>
        <p style={{ color: "#9ca3af", fontSize: "15px", marginTop: "12px", fontFamily: "sans-serif" }}>
          Last updated: June 9, 2026
        </p>
      </section>

      {/* CONTENT */}
      <motion.section
        variants={fadeInUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 100px" }}
      >
        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--font-clash), sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#0a0a0a",
                marginBottom: "14px",
                marginTop: 0
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#4b5563",
                lineHeight: 1.8,
                margin: 0,
                fontFamily: "sans-serif"
              }}
            >
              {section.content}
            </p>
            {section.bullets && (
              <ul style={{ marginTop: "12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {section.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: "15px",
                      color: "#4b5563",
                      lineHeight: 1.7,
                      fontFamily: "sans-serif"
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </motion.section>

    </main>
  );
}