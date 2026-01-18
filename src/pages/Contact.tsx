import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

function GoogleMap() {
  return (
    <section className="w-full">
      <div className="section-container py-12">
        <div className="text-center mb-8">
          <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider animate-fade-up">
            Our Location
          </span>

          <h2 className="heading-section text-foreground mt-4 animate-fade-up delay-100">
            Find Us in Hyderabad
          </h2>

          <p className="text-body text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-up delay-200">
            Visit our office or reach out to us for any queries regarding corporate transportation services.
          </p>
        </div>
      </div>

      <div className="w-full h-[400px] md:h-[500px] animate-fade-up delay-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698763065!2d78.24323257890623!3d17.412281099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aditya Travels Location - Hyderabad"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </section>
  );
}

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Aditya Travel | Corporate Transportation Hyderabad"
        description="Contact Aditya Travel for corporate transportation quotes, employee commute solutions, and executive travel services in Hyderabad."
        url="https://adityatrav.com/contact"
      />

      <Header />

      <main className="md:pt-28">
        {/* Hero Banner */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="section-container text-center">
            <h1 className="heading-section text-white animate-fade-up">
              Contact Us
            </h1>

            <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
              Get in touch with our team for corporate travel solutions, quotes, and inquiries.
            </p>
          </div>
        </section>

        <ContactSection />
        <GoogleMap />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
