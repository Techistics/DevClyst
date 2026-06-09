"use client";

import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";

const sections = [
  {
    title: "1. No Refund Policy",
    content: "All payments made to DevClyst are strictly non-refundable. Once the payment has been received and the project has been initiated, no refund requests will be accepted under any circumstances, including but not limited to:",
    bullets: [
      "Change of mind after payment.",
      "Change in business plans.",
      "Delay caused by the client.",
      "Client not providing required information or materials.",
      "Client deciding not to continue the project.",
      "Dissatisfaction after development has begun."
    ],
    footer: "By making payment to DevClyst, the client acknowledges and agrees to this No Refund Policy."
  },
  {
    title: "2. Service Commitment",
    content: "DevClyst guarantees that all services and deliverables promised at the time of agreement or quotation will be provided to the client. Deliverables may include but are not limited to:",
    bullets: [
      "Mobile applications (Android / iOS).",
      "Website or web platform.",
      "Admin panel or dashboard.",
      "Source code (if included in agreement).",
      "Technical deployment support.",
      "Bug fixing during the agreed maintenance period."
    ]
  },
  {
    title: "3. Project Execution",
    content: "Once payment is received:",
    bullets: [
      "The project will be scheduled and development will begin.",
      "The client must provide all required content, details, branding materials, and approvals on time.",
      "Any delay caused by the client will not make the project eligible for a refund."
    ]
  },
  {
    title: "4. Third-Party Services",
    content: "DevClyst may integrate third-party tools, APIs, hosting services, payment gateways, or external platforms. Please note:",
    bullets: [
      "Third-party service charges are not controlled by DevClyst.",
      "Any payment made for third-party services is non-refundable and subject to the policies of the respective service provider."
    ]
  },
  {
    title: "5. Project Cancellation",
    content: "If the client decides to cancel the project after payment:",
    bullets: [
      "The project will be considered voluntarily terminated by the client.",
      "No refund will be issued.",
      "Any completed work or partially developed modules may be shared at the discretion of DevClyst."
    ]
  },
  {
    title: "6. Agreement Acceptance",
    content: "By making payment to DevClyst or starting a project with us, the client confirms that they have:",
    bullets: [
      "Read this Refund Policy.",
      "Understood the terms.",
      "Agreed to the No Refund condition."
    ]
  },
  {
    title: "7. Contact Information",
    content: "For any queries regarding this policy, please contact us:",
    bullets: [
      "Email: devclyst@gmail.com",
      "Phone: +92 370 4640009"
    ]
  }
];

export default function RefundPage() {
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
          Refund Policy
        </h1>
        <p style={{ color: "#9ca3af", fontSize: "15px", marginTop: "12px", fontFamily: "sans-serif" }}>
          Effective Date: January 1, 2026
        </p>
        <p style={{ color: "#6b7280", fontSize: "15px", maxWidth: "600px", margin: "16px auto 0", lineHeight: 1.7, fontFamily: "sans-serif" }}>
          At DevClyst, we are committed to delivering high-quality website and application development solutions, including pre-built SaaS platforms and custom development services.
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
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: 1.8, margin: 0, fontFamily: "sans-serif" }}>
              {section.content}
            </p>
            {section.bullets && (
              <ul style={{ marginTop: "12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {section.bullets.map((b, bi) => (
                  <li key={bi} style={{ fontSize: "15px", color: "#4b5563", lineHeight: 1.7, fontFamily: "sans-serif" }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {"footer" in section && section.footer && (
              <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: 1.8, marginTop: "12px", fontStyle: "italic", fontFamily: "sans-serif" }}>
                {section.footer}
              </p>
            )}
          </div>
        ))}
      </motion.section>

    </main>
  );
}