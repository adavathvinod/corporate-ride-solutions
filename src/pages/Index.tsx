import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSectionHome } from "@/components/AboutSectionHome";
import { ServicesSection } from "@/components/ServicesSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
  title="Aditya Travel | Corporate Transportation Partner in Hyderabad"
  description="Safe, reliable 24x7 corporate employee commute and executive transportation in Hyderabad. Trusted by 19+ corporations."
  url="https://adityatrav.com"
/>

      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSectionHome />
        <ServicesSection />
        <AchievementsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
