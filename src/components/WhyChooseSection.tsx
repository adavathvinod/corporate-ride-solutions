import { Shield, Sparkles, Cpu, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Our Strength – The Drivers",
    description:
      "Professionally trained, bilingual, and background-verified chauffeurs known for punctuality, safety, and maintaining comfort throughout every trip.",
    features: ["Background Verified", "Professionally Trained", "Bilingual Staff"],
  },
  {
    icon: Sparkles,
    title: "Safety & Hygiene First",
    description:
      "Vehicles under 5 years, regularly serviced and sanitized. Cleanliness and hygiene checks before every trip for worry-free travel.",
    features: ["Vehicles < 5 Years", "Regular Sanitization", "Pre-trip Checks"],
  },
  {
    icon: Cpu,
    title: "Technology-Driven Operations",
    description:
      "Powered by MoveInSync — offering OTP-verified rides, real-time tracking, and optimized routing for safe, efficient employee commutes.",
    features: ["OTP Verification", "Real-time Tracking", "Route Optimization"],
  },
  {
    icon: Award,
    title: "Our Achievements",
    description:
      "Zero breakdowns, 100% client retention, and top-rated service satisfaction. Ensuring reliability and transparency through seamless integration.",
    features: ["Zero Breakdowns", "100% Retention", "Top Rated"],
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-us" className="section-padding bg-muted">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider animate-fade-up">
            Why Choose Us
          </span>

          <h2 className="heading-section text-foreground mt-4 animate-fade-up delay-100">
            Excellence in Every Journey
          </h2>

          <p className="text-body text-muted-foreground mt-4 animate-fade-up delay-200">
            We combine professional drivers, modern technology, and stringent safety protocols
            to deliver an unmatched corporate travel experience.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex gap-6 p-6 rounded-xl bg-background/70 border border-border hover:border-primary/30 hover:bg-muted transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="heading-card text-foreground">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {reason.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {reason.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-xs font-sans font-medium text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
