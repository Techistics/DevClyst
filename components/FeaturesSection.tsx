import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="w-full py-24 px-4 bg-white">
      {/* Pill Label */}
      <div className="flex justify-center mb-6 ">
        <span className=" shadow-xl bg-white rounded-full px-4 py-1 text-lg text-gray-500 font-medium">
          Features
        </span>
      </div>

      {/* Heading */}
      <h2
        className="text-[#0a0a0a] text-center font-semibold mb-16 mx-auto tracking-tight"
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          maxWidth: "800px",
          lineHeight: 1.1,
        }}
      >
        Streamline Business with our
        <br className="hidden sm:block" /> Flexible Options
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {/* Card 1: Custom Development */}
  <Link href="/customized" style={{ textDecoration: "none" }}>
    <div className="bg-white border border-gray-300 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(55,177,164,0.5)] hover:scale-[1.01] transition-all duration-300 flex flex-col cursor-pointer">
     <div className="relative w-full aspect-[16/10] mb-6 rounded-xl bg-gray-100 overflow-hidden border border-gray-300">
  <Image
    src="/custom.jpg"
    alt="Custom Development App UI"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-contain"
    priority // Add this if the image is above the fold
  />
</div>
      <h3 className="text-[22px] font-semibold text-[#0a0a0a] mb-2 tracking-wide">
        Custom Development
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        Monitor your finances live with clear, intuitive dashboards.
      </p>
    </div>
  </Link>

        {/* Card 2: Prebuilt Products */}
        <Link href="/prebuilt" style={{ textDecoration: "none" }}>
          <div className="bg-white border border-gray-300 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(55,177,164,0.5)] hover:scale-[1.01] transition-all duration-300 flex flex-col cursor-pointer">
            <div className="relative w-full aspect-[16/10] mb-6 rounded-xl bg-gray-900 overflow-hidden border border-gray-100">
              <Image
                src="/prebuilt.png"
                alt="Prebuilt Products UI"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
              <h3 className="text-[22px] font-semibold text-[#0a0a0a] tracking-wide">
                SaaS Prebuilt @ 25,000 /-
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Launch fast with our ready-made SaaS products like Techistics CRM.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
