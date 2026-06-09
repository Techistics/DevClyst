"use client";

export default function DeveloperStrip() {
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