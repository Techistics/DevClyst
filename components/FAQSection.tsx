"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  { q: "How long does a customized project take?", a: "Typically 4 to 12 weeks depending on complexity, features, and integrations required." },
  { q: "Do you provide post-launch maintenance?", a: "Yes, we provide ongoing support, security monitoring, and regular updates to ensure your product performs optimally." },
  { q: "Will I own the complete source code?", a: "Absolutely. Once the final milestone is cleared, 100% intellectual property ownership and source code are handed over to you." },
  { q: "What technologies do you use?", a: "Next.js, React, Node.js, PostgreSQL, and Flutter for mobile apps." },
  { q: "Do you work with international clients?", a: "Yes — we actively work with clients from UAE, UK, US and other countries with full remote collaboration." }
];

export default function FAQSection({ faqs }: FAQSectionProps) {
  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f4f4f4",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.045'/%3E%3C/svg%3E")`,
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb"
      }}
    >
      <section
        className="faq-split-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 24px",
          display: "flex",
          flexDirection: "row",
          gap: "64px",
          textAlign: "left"
        }}
      >
        <style jsx>{`
          .faq-split-container { display: flex; flex-direction: row; }
          @media (max-width: 868px) {
            .faq-split-container { flex-direction: column !important; gap: 40px !important; }
          }
        `}</style>

        <div style={{ flex: "1 1 35%", minWidth: "280px" }}>
          <h2
            style={{
              fontFamily: "var(--font-clash), sans-serif",
              fontSize: "clamp(36px, 4.5vw, 48px)",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "#0f172a",
              position: "sticky",
              top: "40px"
            }}
          >
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        <div style={{ flex: "1 1 65%", display: "flex", flexDirection: "column", gap: "14px" }}>
          {items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.02)",
                  overflow: "hidden",
                  transition: "all 0.25s ease"
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "22px 28px",
                    textAlign: "left",
                    outline: "none",
                    justifyContent: "space-between",
                    gap: "16px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                      style={{
                        width: "4px",
                        height: "20px",
                        backgroundColor: hoveredIdx === i || isOpen ? "#069baf" : "#0a0a0a",
                        borderRadius: "99px",
                        transition: "background-color 0.2s ease"
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                        fontWeight: 550,
                        color: hoveredIdx === i || isOpen ? "#069baf" : "#1e293b",
                        letterSpacing: "-0.01em",
                        transition: "color 0.2s ease"
                      }}
                    >
                      {faq.q}
                    </span>
                  </div>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isOpen ? "#069baf" : "#1e293b"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease"
                  }}
                >
                  <div
                    style={{
                      padding: "0 28px 24px 48px",
                      color: "#4b5563",
                      fontSize: "14.5px",
                      lineHeight: 1.6,
                      fontFamily: "sans-serif"
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}