"use client";

import React from "react";

const row1Logos = [
  "MURZBAN",
  "ceya*",
  "minitpe.",
  "plum",
  "DailyObjects",
  "greenfeels",
  "STREET9",
  "TWINLEAVES",
  "Plutope",
  "Momentz"
];

const row2Logos = [
  "plum",
  "TWINLEAVES",
  "Momentz",
  "MURZBAN",
  "STREET9",
  "ceya*",
  "Plutope",
  "DailyObjects",
  "minitpe.",
  "greenfeels"
];

// Duplicate the arrays to ensure seamless loop
const duplicatedRow1 = Array(8).fill(row1Logos).flat();
const duplicatedRow2 = Array(8).fill(row2Logos).flat();

export default function LogoMarquee() {
  return (
    <section
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "32px 0",
        borderTop: "1px solid #f0f0f0",
        background: "white"
      }}
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marquee 140s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee 140s linear infinite reverse;
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Row 1 */}
        <div style={{ display: "flex", width: "max-content", padding: "20px 0" }} className="animate-marquee-left">
          {duplicatedRow1.map((logo, idx) => (
            <div
              key={`row1-${idx}`}
              style={{
                display: "inline-block",
                marginRight: "80px",
                fontSize: "48px",
                fontWeight: 700,
                color: "#d1d5db"
              }}
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div style={{ display: "flex", width: "max-content", padding: "20px 0" }} className="animate-marquee-right">
          {duplicatedRow2.map((logo, idx) => (
            <div
              key={`row2-${idx}`}
              style={{
                display: "inline-block",
                marginRight: "80px",
                fontSize: "52px",
                fontWeight: 700,
                color: "#d1d5db"
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
