import { CheckCircle } from "lucide-react";
import teamDrivers from "@/assets/team-drivers.jpeg";

const highlights = [
  "Founded in 2019 with a vision to simplify corporate employee transportation",
  "Over 6 years of trusted service in Hyderabad's IT industry",
  "Partnered with reputed clients like Mitratech, iCIMS, Cognitus, and more",
  "Ensuring timely, reliable, and secure travel experiences",
  "Thousands of professionals served every day",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fade-up">
            <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider animate-fade-up">
              About Us
            </span>

            <h2 className="heading-section text-foreground animate-fade-up delay-100">
              Your Corporate Travel Partner for{" "}
              <span className="text-primary">Safe, Smart & Sustainable</span> Rides
            </h2>

            <p className="text-body text-muted-foreground animate-fade-up delay-200">
              Aditya Travels began its journey with a vision to simplify corporate
              employee transportation, starting with cab services for Hyderabad's
              IT industry. With over 6 years of trusted service, we've partnered
              with reputed clients like Mitratech and iCIMS, ensuring timely,
              reliable, and secure travel experiences for thousands of
              professionals every day.
            </p>

            <ul className="space-y-4 animate-fade-up delay-300">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 animate-fade-up delay-300">
            
            {/* Mission Card */}
            <div className="card-elevated animate-fade-up delay-400">
              <h3 className="heading-card text-primary mb-4">Our Mission</h3>
              <p className="text-body text-muted-foreground mb-4">
                "To provide safe, secure, and sustainable corporate transportation
                across India."
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm font-sans text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                  Serve IT, Pharma, and manufacturing units with excellence
                </li>
                <li className="flex items-start gap-2 text-sm font-sans text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                  Reduce carbon footprint with CNG and Electric vehicles
                </li>
                <li className="flex items-start gap-2 text-sm font-sans text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                  Deliver eco-conscious, employee-friendly mobility solutions
                </li>
              </ul>
            </div>

            {/* Drivers Card */}
            <div className="card-elevated animate-fade-up delay-500">
              <h3 className="heading-card text-primary mb-4">
                Our Strength – The Drivers
              </h3>

              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={teamDrivers}
                  alt="Aditya Travels professional driver team"
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <p className="text-body text-muted-foreground mb-4">
                Our drivers are our brand ambassadors. They are:
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm font-sans text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                  Professionally trained bilingual communicators
                </li>
                <li className="flex items-start gap-2 text-sm font-sans text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                  Regularly coached in politeness, punctuality, and safety
                </li>
                <li className="flex items-start gap-2 text-sm font-sans text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                  100% background-checked and police-verified profiles
                </li>
                <li className="flex items-start gap-2 text-sm font-sans text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                  Committed to maintaining hygiene and comfort in every trip
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
