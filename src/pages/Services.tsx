import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Plane, Globe, Users, Building, CalendarCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Briefcase,
    title: "Corporate Commute",
    description: "Daily pick-up and drop-off services for your employees. Reliable, punctual, and comfortable transportation that ensures your team arrives on time, every time.",
    features: ["Door-to-door service", "Flexible scheduling", "Real-time tracking", "24/7 operations"],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Premium airport transfer services for executives and VIP guests. Professional chauffeurs ensure a seamless travel experience from arrival to destination.",
    features: ["Flight tracking", "Meet & greet", "Executive vehicles", "Luggage assistance"],
  },
  {
    icon: Globe,
    title: "Foreign Guest Support",
    description: "Specialized transportation for international visitors with English-speaking chauffeurs. Cultural sensitivity and professional service guaranteed.",
    features: ["English-speaking drivers", "City tours available", "Multilingual support", "Local expertise"],
  },
  {
    icon: Users,
    title: "Group Transportation",
    description: "Efficient transportation solutions for corporate events, conferences, and team outings with our fleet of 15-35 seater buses.",
    features: ["Large capacity buses", "Event coordination", "Custom routing", "On-site support"],
  },
  {
    icon: Building,
    title: "Outstation Trips",
    description: "Long-distance travel for business meetings, site visits, or corporate retreats. Well-maintained vehicles with experienced drivers.",
    features: ["Interstate travel", "Multi-day trips", "Verified drivers", "24/7 support"],
  },
  {
    icon: CalendarCheck,
    title: "Monthly Contracts",
    description: "Tailored monthly transportation contracts designed for your organization's specific needs. Flexible terms and dedicated vehicle allocation.",
    features: ["Fixed monthly rates", "Dedicated vehicles", "Priority booking", "Account manager"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
            Comprehensive Corporate <span className="text-primary">Transport Solutions</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            From daily employee commutes to executive airport transfers, we provide 
            end-to-end transportation solutions tailored to your corporate needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl card-shadow border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Simple & Seamless Booking
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Request Quote", desc: "Share your transportation requirements" },
              { step: "02", title: "Get Proposal", desc: "Receive customized solutions & pricing" },
              { step: "03", title: "Sign Contract", desc: "Finalize terms and start date" },
              { step: "04", title: "Enjoy Service", desc: "Reliable daily transportation begins" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Let's Discuss Your Requirements
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a customized transportation solution tailored to your organization's needs.
          </p>
          <Link to="/contact">
            <Button variant="heroOutline" size="xl">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
