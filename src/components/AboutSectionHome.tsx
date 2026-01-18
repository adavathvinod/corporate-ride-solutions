import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSectionHome() {
  return (
    <section
      id="about"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          
          {/* Badge */}
          <div className="inline-block animate-fade-up">
            <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="heading-section text-foreground mt-4 animate-fade-up delay-100">
            Your Corporate Travel Partner for{" "}
            <span className="text-primary">Safe, Smart & Sustainable</span> Rides
          </h2>

          {/* Description */}
          <p className="text-body text-muted-foreground mt-6 max-w-3xl mx-auto animate-fade-up delay-200">
            Aditya Travels began its journey with a vision to simplify corporate
            employee transportation, starting with cab services for Hyderabad's
            IT industry. With over 6 years of trusted service, we've partnered
            with reputed clients like Mitratech and iCIMS, ensuring timely,
            reliable, and secure travel experiences for thousands of
            professionals every day.
          </p>

          {/* CTA */}
          <div className="mt-8 animate-fade-up delay-300">
            <Button variant="brand" size="xl" asChild>
              <a href="/about" className="inline-flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
