"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "DevClyst built our CRM from scratch — it completely transformed how we manage students and track leads.",
    name: "Bilal Ahmed",
    role: "Study Abroad Consultancy",
    avatar: "BA",
  },
  {
    id: 2,
    quote: "Fast delivery, clean code, and they truly understood our business needs from day one. Highly recommended.",
    name: "Sana Malik",
    role: "E-commerce Founder",
    avatar: "SM",
  },
  {
    id: 3,
    quote: "Outstanding work. Our mobile app hit 5 stars on the Play Store within a month of launch.",
    name: "Usman Raza",
    role: "Logistics Startup",
    avatar: "UR",
  },
  {
    id: 4,
    quote: "Professional team, on-time delivery, and the final product exceeded our expectations completely.",
    name: "Ayesha Tariq",
    role: "SaaS Founder",
    avatar: "AT",
  },
  {
    id: 5,
    quote: "The WhatsApp chatbot they built for us handles 80% of customer queries automatically. Game changer.",
    name: "Hamza Sheikh",
    role: "Retail Business Owner",
    avatar: "HS",
  },
  {
    id: 6,
    quote: "Beautiful website, delivered on time, and the team was responsive throughout the entire project.",
    name: "Fatima Zahra",
    role: "Boutique Owner",
    avatar: "FZ",
  },
];

const StarRating = () => (
  <div className="flex items-center gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export default function TestimonialsSection() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const loadSwiper = async () => {
      const SwiperModule = await import("swiper");
      const { Navigation } = await import("swiper/modules");
      await import("swiper/css");

      if (swiperRef.current) return;

      const swiper = new SwiperModule.default(".testimonials-swiper", {
        modules: [Navigation],
        slidesPerView: 2,
        spaceBetween: 24,
        loop: true,
        navigation: {
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 24 },
        },
      });
      swiperRef.current = swiper;
    };

    loadSwiper();
  }, []);

  return (
    <section
      style={{ backgroundColor: "#ffffff", padding: "96px 0", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {/* LEFT */}
          <div style={{ width: "320px", flexShrink: 0 }}>
            <span
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                fontWeight: 500,
                display: "block",
                marginBottom: "14px",
                letterSpacing: "0.02em",
              }}
            >
              Testimonials
            </span>
            <h2
              style={{
                fontWeight: 600,
                color: "#0a0a0a",
                lineHeight: 1.15,
                marginBottom: "36px",
                fontSize: "clamp(28px, 3.5vw, 44px)",
              }}
            >
              Happy Clients{" "}
              <span
                style={{
                  background: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "#069baf",
                }}
              >
                Testimonials
              </span>
            </h2>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                className="testimonials-prev"
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  border: "1.5px solid #069baf",
                  background: "transparent",
                  color: "#069baf",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#069baf";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#069baf";
                }}
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 12L4 12M9 6L3.707 11.293C3.374 11.626 3.207 11.793 3.207 12C3.207 12.207 3.374 12.374 3.707 12.707L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="testimonials-next"
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  border: "1.5px solid #069baf",
                  background: "transparent",
                  color: "#069baf",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#069baf";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#069baf";
                }}
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12L20 12M15 18L20.293 12.707C20.626 12.374 20.793 12.207 20.793 12C20.793 11.793 20.626 11.626 20.293 11.293L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: Swiper */}
          <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
            <div className="testimonials-swiper swiper" style={{ overflow: "hidden" }}>
              <div className="swiper-wrapper">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="swiper-slide group"
                    style={{
                      background: "#ffffff",
                      border: "1.5px solid #e5e7eb",
                      borderRadius: "16px",
                      padding: "28px",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#069baf";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(6,155,175,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Author */}
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                      <div
                        style={{
                          width: "46px",
                          height: "46px",
                          borderRadius: "50%",
                          background: "#f3f4f6",
                          border: "1px solid #e5e7eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "13px",
                          color: "#0a0a0a",
                          flexShrink: 0,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "15px", color: "#0a0a0a" }}>
                          {t.name}
                        </div>
                        <div style={{ fontSize: "12.5px", color: "#9ca3af", marginTop: "2px" }}>
                          {t.role}
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <StarRating />

                    {/* Quote */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        lineHeight: 1.7,
                        minHeight: "72px",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}