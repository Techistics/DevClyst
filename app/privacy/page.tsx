"use client";

import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";

const sections = [
  {
    title: "1. Information We Collect",
    content: "At DevClyst, we prioritize the protection of your data. We collect information that you provide directly to us, such as when you subscribe to our newsletter, request a quote, or purchase a pre-built solution.",
    bullets: [
      "Personal identifiers (Name, Email address, Phone number).",
      "Project details and specifications for custom development.",
      "Payment information (processed securely through third-party providers)."
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the collected data for specific business purposes, including but not limited to:",
    bullets: [
      "Delivering your custom or pre-built software solutions.",
      "Communicating project updates and support.",
      "Sending you newsletters (only if you have opted in via our footer subscription).",
      "Improving our website functionality and user experience."
    ]
  },
  {
    title: "3. Code Authority & Data Security",
    content: "We respect the confidentiality of your projects. Once full payment is received, the complete source code authority is transferred to you. We do not retain rights to use your custom project code for other clients without your explicit permission.",
    bullets: undefined
  },
  {
    title: "4. Cookies",
    content: "Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your individual browser options, though this may affect the functionality of certain site features.",
    bullets: undefined
  },
  {
    title: "5. Third-Party Links",
    content: "Our website may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us, and we advise you to review their Privacy Policies.",
    bullets: undefined
  },
  {
    title: "6. Contact Us",
    content: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at: devclyst@gmail.com",
    bullets: undefined
  }
];

export default function PrivacyPage() {
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
          Privacy Policy
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