export default function VideoSection() {
  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

  return (
    <section
      className="relative w-full py-20 px-6 overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#1a0f00",
        backgroundImage: noiseTexture,
      }}
    >
      {/* Radial Glow Pseudo-element equivalent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(210,120,20,0.45) 0%, transparent 70%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2
          className="text-white text-center font-light mb-12 tracking-tight"
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.1,
          }}
        >
          Streamline Business with our
          <br className="hidden sm:block" /> Flexible options
        </h2>

        {/* Video Embed */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm relative">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/r1-N6tLZiGU"
            title="Video Placeholder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
