import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection";
import ReelsCarousel from "@/components/ReelsCarousel";
import PortfolioSection from "@/components/PortfolioSection";
import DeveloperStrip from "@/components/DeveloperStrip";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <LogoMarquee />
      <FeaturesSection />
      <VideoSection />
      <ReelsCarousel />
      <PortfolioSection />
      <DeveloperStrip />
      <TestimonialsSection />
      <FAQSection  />
    </main>
  );
}
