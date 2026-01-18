import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  Car,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Wrench,
  FileCheck,
  Sparkles,
} from "lucide-react";
import { SEO } from "@/components/SEO";

const vehicles = [
  {
    type: "Sedan",
    models: "Swift Dzire, Honda Amaze, Maruti Ciaz",
    capacity: "4 Passengers",
    features: ["AC", "GPS Enabled", "Clean Interiors", "Sanitized Daily"],
    ideal: "Executive travel, Airport transfers",
  },
  {
    type: "Premium Sedan",
    models: "Honda City, Hyundai Verna",
    capacity: "4 Passengers",
    features: ["Premium AC", "GPS Enabled", "Leather Seats", "Newspaper/Water"],
    ideal: "CXO travel, Client meetings",
  },
  {
    type: "SUV",
    models: "Toyota Innova, Innova Crysta",
    capacity: "6-7 Passengers",
    features: ["Spacious", "GPS Enabled", "Luggage Space", "AC"],
    ideal: "Group travel, Outstation trips",
  },
  {
    type: "Luxury SUV",
    models: "Toyota Fortuner, MG Gloster",
    capacity: "6-7 Passengers",
    features: ["Premium Interior", "GPS Enabled", "Entertainment System", "Refreshments"],
    ideal: "Board members, VIP guests",
  },
  {
    type: "Tempo Traveller",
    models: "Force Traveller 12/15 Seater",
    capacity: "12-15 Passengers",
    features: ["Pushback Seats", "AC", "PA System", "Ample Luggage"],
    ideal: "Team outings, Event logistics",
  },
  {
    type: "Luxury Bus",
    models: "35-50 Seater AC Buses",
    capacity: "35-50 Passengers",
    features: ["AC", "Reclining Seats", "Entertainment", "Restroom (select)"],
    ideal: "Corporate events, Large group transport",
  },
];

const safetyProtocols = [
  {
    icon: Shield,
    title: "Background Verified Drivers",
    description: "Every driver undergoes thorough police verification and background checks before joining our team.",
  },
  {
    icon: FileCheck,
    title: "Regular Training",
    description: "Drivers receive monthly training on safety protocols, customer service, and defensive driving techniques.",
  },
  {
    icon: Wrench,
    title: "Vehicle Maintenance",
    description: "All vehicles undergo bi-weekly maintenance checks and annual comprehensive servicing.",
  },
  {
    icon: Sparkles,
    title: "Hygiene Standards",
    description: "Vehicles sanitized before and after every trip with hospital-grade disinfectants.",
  },
  {
    icon: Clock,
    title: "Vehicle Age Policy",
    description: "All fleet vehicles are under 5 years old for reliability and safety.",
  },
  {
    icon: Car,
    title: "GPS & Safety Features",
    description: "GPS tracking, speed governors, and emergency SOS in every vehicle.",
  },
];

const FleetAndSafety = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fleet & Safety Standards | Aditya Travel"
        description="Explore Aditya Travel’s modern fleet and industry-leading safety and hygiene standards."
        url="https://adityatrav.com/fleet-and-safety"
      />

      <Header />

      <main className="pt-28">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="section-container text-center">
            <h1 className="heading-section text-white animate-fade-up">
              Modern Fleet, Uncompromising Safety
            </h1>
            <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
              Explore our diverse fleet of well-maintained vehicles and our rigorous safety protocols.
            </p>
          </div>
        </section>

        {/* Fleet */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
                Our Fleet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-up delay-100">
                Vehicles for Every Corporate Need
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-up delay-200">
                From compact sedans to luxury buses — choose the right vehicle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle, i) => (
                <div
                  key={vehicle.type}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover transition-shadow animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{vehicle.type}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      <Users className="inline h-3 w-3 mr-1" />
                      {vehicle.capacity}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{vehicle.models}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {vehicle.features.map((f) => (
                      <span key={f} className="px-2 py-1 bg-muted text-xs rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Ideal for: </span>
                    <span className="font-medium">{vehicle.ideal}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium mb-4 animate-fade-up">
                Safety First
              </span>
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-up delay-100">
                Safety & Hygiene Protocols
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-up delay-200">
                Highest standards in driver training, vehicle care, and hygiene.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyProtocols.map((p, i) => (
                <div
                  key={p.title}
                  className="bg-background rounded-2xl border border-border p-6 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FleetAndSafety;
