import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Droplets, AlertTriangle, CheckCircle, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import fleetSedan from "@/assets/fleet-sedan.jpg";
import fleetInnova from "@/assets/fleet-innova.jpg";
import fleetBus from "@/assets/fleet-bus.jpg";

const fleetCategories = [
  {
    name: "Executive Sedans",
    image: fleetSedan,
    capacity: "4 Passengers",
    description: "Premium sedans for executive travel and daily corporate commutes.",
    models: ["Toyota Etios", "Honda City", "Maruti Dzire"],
    features: ["Air Conditioned", "GPS Enabled", "Leather Interiors"],
  },
  {
    name: "Premium MPVs",
    image: fleetInnova,
    capacity: "6-7 Passengers",
    description: "Spacious multi-purpose vehicles for group travel and airport transfers.",
    models: ["Toyota Innova Crysta", "Kia Carens", "Ertiga"],
    features: ["Extra Legroom", "Luggage Space", "Captain Seats"],
  },
  {
    name: "Corporate Buses",
    image: fleetBus,
    capacity: "15-35 Passengers",
    description: "Large capacity buses for employee transportation and corporate events.",
    models: ["35 Seater AC Bus", "25 Seater Mini Bus", "15 Seater Tempo Traveler"],
    features: ["Push-back Seats", "Entertainment System", "PA System"],
  },
];

const safetyFeatures = [
  {
    icon: Shield,
    title: "100% Background Verified Drivers",
    description: "Every driver undergoes rigorous background checks, police verification, and reference validation before joining our team.",
  },
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "All vehicles equipped with GPS tracking for 24/7 monitoring. Managers and employees can track rides in real-time.",
  },
  {
    icon: AlertTriangle,
    title: "SOS Emergency System",
    description: "One-touch SOS button in vehicles and mobile app connected to our 24/7 control room for immediate emergency response.",
  },
  {
    icon: Users,
    title: "OTP Verified Boarding",
    description: "Secure OTP verification ensures the right driver meets the right passenger every time. No exceptions.",
  },
  {
    icon: Droplets,
    title: "Sanitized Vehicles",
    description: "Regular sanitization of all vehicles following strict hygiene protocols. Clean and fresh interiors guaranteed.",
  },
  {
    icon: CheckCircle,
    title: "Zero Breakdown Record",
    description: "Meticulous fleet maintenance ensures 100% reliability. We've maintained a zero breakdown record for over 5 years.",
  },
];

const FleetSafety = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Fleet & Safety</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
            Premium Fleet, <span className="text-primary">Uncompromised Safety</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Our meticulously maintained fleet and stringent safety protocols ensure 
            your employees travel in comfort and security.
          </p>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Fleet</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Vehicles for Every Need
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {fleetCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden card-shadow border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {category.capacity}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Models Available</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.models.map((model, i) => (
                        <span key={i} className="text-xs bg-secondary text-foreground px-2 py-1 rounded">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="cta" size="lg">
                Request Fleet Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Safety First</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Your Safety is Our Priority
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We go above and beyond industry standards to ensure every journey is safe, 
              secure, and comfortable for your employees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "0", label: "Breakdown Record" },
              { value: "100%", label: "Driver Verification" },
              { value: "24/7", label: "Control Room" },
              { value: "500+", label: "Daily Trips" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Experience Safe Corporate Travel
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let us show you why leading corporations trust Aditya Travels for their employee transportation needs.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FleetSafety;
