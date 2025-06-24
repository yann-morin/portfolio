import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import WhyChooseSection from "@/components/why-choose-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
