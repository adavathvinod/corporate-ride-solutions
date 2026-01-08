import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Smartphone, Shield, BarChart3, Clock, Users, Wifi, Lock } from "lucide-react";
import Layout from "@/components/layout/Layout";

const techFeatures = [
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "Monitor every vehicle in your fleet with precision GPS tracking. Know exactly where your employees are at any given moment.",
  },
  {
    icon: Smartphone,
    title: "MoveInSync Integration",
    description: "Seamless integration with MoveInSync platform for automated rostering, trip scheduling, and employee self-service booking.",
  },
  {
    icon: Lock,
    title: "OTP Verified Rides",
    description: "Enhanced security with OTP verification for each trip. Employees verify their ride before boarding for complete safety.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive reporting and analytics to track usage patterns, costs, and optimize your transportation budget.",
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "Smart routing algorithms optimize pickup times and routes, reducing wait times and improving efficiency.",
  },
  {
    icon: Users,
    title: "Employee Self-Service",
    description: "Easy-to-use mobile app for employees to book, modify, or cancel rides with instant confirmation.",
  },
];

const integrations = [
  { name: "MoveInSync", description: "Complete employee transport management" },
  { name: "SAP Integration", description: "Expense management and reporting" },
  { name: "HR Systems", description: "Employee data synchronization" },
  { name: "Custom APIs", description: "Seamless integration with your systems" },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Technology</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
            Smart Technology for <span className="text-primary">Modern Transport</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Powered by cutting-edge technology and seamless MoveInSync integration, 
            we deliver intelligent transportation solutions for the modern workplace.
          </p>
        </div>
      </section>

      {/* Main Tech Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl card-shadow border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoveInSync Feature */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">MoveInSync Partner</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                Seamless Employee Transport Management
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As certified MoveInSync partners, we offer enterprise-grade transportation 
                management that integrates directly with your HR systems and workflows.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Wifi, text: "Live tracking for employees and managers" },
                  { icon: Shield, text: "SOS alerts and emergency support" },
                  { icon: Clock, text: "Automated roster management" },
                  { icon: BarChart3, text: "Cost optimization insights" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 rounded-2xl card-shadow border border-border">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mobile App Features</h3>
              </div>
              <div className="space-y-4">
                {["Real-time vehicle tracking", "Trip booking & cancellation", "Driver details & ratings", "Expense reports", "Shift scheduling", "SOS button"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Integrations</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Works With Your Existing Systems
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-shadow border border-border text-center hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Experience Smart Transportation
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our technology can transform your corporate transportation.
          </p>
          <Link to="/contact">
            <Button variant="heroOutline" size="xl">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
