"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DeveloperStrip from "@/components/DeveloperStrip";
import { fadeInUpVariant } from "@/lib/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error("Failed to send");
      setIsSubmitted(true);
      setFormData({ fullName: "", phone: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#f8f9fa",
    border: "1px solid transparent",
    borderRadius: "8px",
    padding: "12px 12px 12px 40px",
    fontSize: "14px",
    color: "#4b5563",
    outline: "none",
    fontFamily: "sans-serif",
    transition: "all 0.2s ease",
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "transparent", color: "#0a0a0a" }}>

      {/* HERO */}
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
          style={{ position: "absolute", left: "2%", top: "55%", zIndex: 1, pointerEvents: "none", opacity: 0.9 }}
        >
          <Image src="/object1.png" alt="Floating shape left" width={150} height={150} style={{ objectFit: "contain" }} />
        </motion.div>

        <motion.div
          animate={{ y: ["-50%", "-38%", "-50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", right: "2%", top: "40%", zIndex: 1, pointerEvents: "none", opacity: 0.9 }}
        >
          <Image src="/object2.png" alt="Floating shape right" width={160} height={160} style={{ objectFit: "contain" }} />
        </motion.div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "sans-serif", fontWeight: 500, fontSize: "clamp(46px, 6.2vw, 76px)", lineHeight: 1.15, color: "#0b1325", margin: 0, letterSpacing: "-0.02em" }}>
            Contact Us
          </h1>
          <p style={{ color: "#99a1b2", fontSize: "18px", maxWidth: "760px", margin: "32px auto 0", lineHeight: 1.6, fontWeight: 400, fontFamily: "sans-serif" }}>
            From idea to launch, we design and develop tailor-made websites and apps that scale with your business.
          </p>
        </div>
      </section>

      {/* DEVELOPER STRIP */}
      <DeveloperStrip />

      {/* CONTACT FORM SECTION */}
      <motion.section
        variants={fadeInUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ padding: "60px 24px", backgroundColor: "#ffffff" }}
      >
        <div className="contact-main-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

          <style jsx>{`
            .contact-main-container {
              display: grid;
              grid-template-columns: 1.1fr 1.2fr;
              gap: 60px;
              align-items: start;
            }
            .inputs-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 14px;
              margin-bottom: 14px;
            }
            .input-wrapper {
              position: relative;
              display: flex;
              align-items: center;
            }
            .input-icon {
              position: absolute;
              left: 14px;
              color: #9ca3af;
              pointer-events: none;
            }
            @media (max-width: 992px) {
              .contact-main-container { grid-template-columns: 1fr; gap: 48px; }
            }
            @media (max-width: 560px) {
              .inputs-grid { grid-template-columns: 1fr; }
            }
          `}</style>

          {/* LEFT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <span style={{ color: "#586780", fontSize: "13px", fontWeight: 500, marginBottom: "12px", fontFamily: "sans-serif" }}>
              Contact Form
            </span>

            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "#0d1b2a", margin: "0 0 16px 0", fontFamily: "sans-serif", lineHeight: 1.15 }}>
              Have a question?<br />Contact us now
            </h2>

            <p style={{ color: "#526071", fontSize: "14px", lineHeight: "1.6", marginBottom: "36px", maxWidth: "490px", fontFamily: "sans-serif" }}>
              Have questions or need assistance? Our friendly team is ready to provide all the info you need — just get in touch.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Address */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#f3f4f6", flexShrink: 0 }}>
                  <svg width="16" height="16" fill="none" stroke="#374151" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div style={{ fontFamily: "sans-serif" }}>
                  <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "#111827" }}>Lahore, Pakistan</p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#f3f4f6", flexShrink: 0 }}>
                  <svg width="16" height="16" fill="none" stroke="#374151" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <a href="mailto:devclyst@gmail.com" style={{ textDecoration: "none", fontSize: "14px", color: "#111827", fontWeight: 500, fontFamily: "sans-serif" }}>
                  devclyst@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#f3f4f6", flexShrink: 0 }}>
                  <svg width="16" height="16" fill="none" stroke="#374151" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.73.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <a href="tel:+923704640009" style={{ textDecoration: "none", fontSize: "14px", color: "#111827", fontWeight: 500, fontFamily: "sans-serif" }}>
                  +92 370 4640009
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN — FORM */}
          <div style={{ paddingTop: "20px" }}>
            <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

              <div className="inputs-grid" style={{ width: "100%" }}>
                <div className="input-wrapper">
                  <span className="input-icon"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg></span>
                  <input type="text" name="fullName" placeholder="Your Name" required value={formData.fullName} onChange={handleInputChange} style={inputStyle} />
                </div>

                <div className="input-wrapper">
                  <span className="input-icon"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.73.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></span>
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} style={inputStyle} />
                </div>

                <div className="input-wrapper">
                  <span className="input-icon"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></span>
                  <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} style={inputStyle} />
                </div>

                <div className="input-wrapper">
                  <span className="input-icon"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></span>
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} style={inputStyle} />
                </div>
              </div>

              <div className="input-wrapper" style={{ width: "100%", marginBottom: "20px" }}>
                <span className="input-icon" style={{ top: "14px", alignSelf: "flex-start" }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                </span>
                <textarea name="message" placeholder="Message" required rows={5} value={formData.message} onChange={handleInputChange} style={{ ...inputStyle, padding: "12px 12px 12px 40px", resize: "none" }} />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{ backgroundColor: "#000000", color: "#ffffff", borderRadius: "10px", padding: "12px 32px", fontSize: "14px", fontWeight: 500, border: "none", cursor: isLoading ? "not-allowed" : "pointer", fontFamily: "sans-serif", transition: "opacity 0.2s ease" }}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {submitError && <div style={{ color: "#ef4444", fontSize: "13px", marginTop: "10px", fontFamily: "sans-serif" }}>{submitError}</div>}
              {isSubmitted && <div style={{ color: "#10b981", fontSize: "13px", marginTop: "10px", fontWeight: 500, fontFamily: "sans-serif" }}>✓ Message sent successfully!</div>}

            </form>
          </div>

        </div>
      </motion.section>

    </main>
  );
}