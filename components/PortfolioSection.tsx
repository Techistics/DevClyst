import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Techistics CRM",
    description: "Complete CRM for study abroad consultancies.",
    image: "/portfolio/p1.png",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Modern online store with seamless shopping.",
    image: "/portfolio/p2.png",
  },
  {
    id: 3,
    title: "Trading Platform",
    description: "Journaling platform with AI-backed analytics.",
    image: "/portfolio/p3.png",
  },
  {
    id: 4,
    title: "Food Delivery App",
    description: "Multi-vendor food delivery mobile app.",
    image: "/portfolio/p4.png",
  },
  {
    id: 5,
    title: "Luxury Web Store",
    description: "Premium jewellery store with elegant UX.",
    image: "/portfolio/p5.png",
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    description: "Analytics platform for business insights.",
    image: "/portfolio/p6.png",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 px-4 w-full bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Pill Label */}
        <div className="flex justify-center mb-6">
          <span className="border border-gray-300 bg-white rounded-full px-4 py-1 text-sm text-gray-500 font-medium shadow-sm">
            Social Presence
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-[#0a0a0a] text-center font-bold mb-12 tracking-tight"
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.1,
          }}
        >
          Turning Visions Into Digital Reality
        </h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[18px] font-semibold text-[#0a0a0a] tracking-wide font-sans">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="#"
            className="bg-black text-white rounded-full px-8 py-3 font-semibold text-[15px] hover:bg-gray-800 transition-colors shadow-sm"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
}
