"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  return (
    <footer style={{ width: "100%", backgroundColor: "#ffffff", borderTop: "1px solid #f0f0f0" }}>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 32px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

        <div>
          <p style={{ fontSize: "15px", color: "#9ca3af", marginBottom: "6px", fontWeight: 400 }}>
            Contact us at
          </p>
          
          {/* Fixed the <a> tag opener here */}
          <a 
            href="mailto:partnerships@devclyst.com"
            style={{ fontSize: "16px", fontWeight: 700, color: "#0a0a0a", textDecoration: "none", display: "block", marginBottom: "28px" }}
          >
            DevClyst@gmail.com
          </a>
          
          <div style={{ display: "flex", alignItems: "center", background: "#f9f9f9", borderRadius: "999px", padding: "6px 6px 6px 20px", maxWidth: "420px", border: "1px solid #e5e7eb" }}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: 1, border: "none", background: "transparent", outline: "none", fontSize: "14px", color: "#374151" }}
            />
            <button 
  onClick={async () => {
    if (!email) return;
    setSubscribeStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (!res.ok) throw new Error();
      setSubscribeStatus("success");
      setEmail("");
    } catch {
      setSubscribeStatus("error");
    }
  }}
  disabled={subscribeStatus === "loading"}
  style={{ background: "#0a0a0a", color: "#fff", border: "none", borderRadius: "999px", padding: "10px 24px", fontSize: "14px", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
>
  {subscribeStatus === "loading" ? "..." : subscribeStatus === "success" ? "✓ Done" : "Subscribe"}
</button>
{subscribeStatus === "error" && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "8px" }}>Something went wrong. Try again.</p>}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#9ca3af", marginBottom: "20px" }}>Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { name: "Home", href: "/" },
                { name: "Prebuilt", href: "/prebuilt" },
                { name: "Customized", href: "/customized" },
                { name: "About Us", href: "/about-us" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{ fontSize: "15px", color: "#374151", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#069baf")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#9ca3af", marginBottom: "20px" }}>More Resources</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Refund Policy", href: "/refund" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{ fontSize: "15px", color: "#374151", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#069baf")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div> {/* Added the missing closing div tag for your main inner content grid */}

      <div style={{ overflow: "hidden" }}>
        <p style={{
          fontFamily: "var(--font-clash), sans-serif",
          fontSize: "clamp(60px, 12vw, 160px)",
          fontWeight: 800,
          color: "#f0f0f0",
          textAlign: "center",
          margin: 0,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          userSelect: "none",
          whiteSpace: "nowrap"
        }}>
          DEVCLYST
        </p>
      </div>

    </footer>
  );
}