import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Aditya Travel | Corporate Transport Experts"
        description="Learn about Aditya Travel’s fleet, safety standards, and professional corporate transportation services."
        url="https://adityatrav.com/about"
      />

      <Header />

      <main className="pt-28">
        {/* Hero Banner */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="section-container text-center">
            <h1 className="heading-section text-white animate-fade-up">
              About Us
            </h1>

            <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
              Learn about our journey, mission, and the team behind Aditya Travels.
            </p>
          </div>
        </section>

        {/* About Content */}
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
