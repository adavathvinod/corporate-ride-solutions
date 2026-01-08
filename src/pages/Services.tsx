import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Plane, Users, Car, CheckCircle, MapPin, Route, FileText, Shield, Clock, UserCheck, Calendar, Bus, Headphones, Luggage, CreditCard } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Services = () => {
  return (
    <Layout>
      {/* Employee Commute Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                Daily Pick-up & Drop Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Employee Commute Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Reliable daily transportation for your workforce with technology-enabled 
                operations. Our employee commute services ensure your team arrives on 
                time, every time.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  OTP-verified rides for security
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Real-time GPS tracking
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                  <Route className="w-4 h-4 text-primary" />
                  Route optimization for efficiency
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                  <FileText className="w-4 h-4 text-primary" />
                  Daily reports and analytics
                </span>
              </div>
              <Link to="/contact">
                <Button size="lg">
                  Request Quote for Employee →
                </Button>
              </Link>
            </div>
            
            <div className="bg-card p-8 rounded-2xl card-shadow border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Reduced absenteeism",
                  "Improved employee satisfaction",
                  "Cost-effective fleet management",
                  "Seamless MoveIn Sync integration",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Travel Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card p-8 rounded-2xl card-shadow border border-border order-2 lg:order-1">
              <h3 className="text-lg font-semibold text-foreground mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Luxury sedan and SUV options",
                  "Professional, uniformed drivers",
                  "In-car amenities available",
                  "24/7 availability",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                Premium Chauffeur Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Executive Travel Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Exclusive travel solutions for your leadership team. Our executive service 
                combines luxury vehicles with professionally trained chauffeurs.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground">
                  <UserCheck className="w-4 h-4 text-primary" />
                  Confidential & discrete service
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  Background-verified chauffeurs
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  Flexible scheduling
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  Dedicated account manager
                </span>
              </div>
              <Link to="/contact">
                <Button size="lg">
                  Request Quote for Executive →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Logistics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                Corporate Event Transportation
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Event Logistics
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                End-to-end transportation management for corporate events, 
                conferences, team outings, and large-scale gatherings.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                  <Bus className="w-4 h-4 text-primary" />
                  Large fleet capacity
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Multi-point coordination
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  Event-specific scheduling
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                  <Headphones className="w-4 h-4 text-primary" />
                  On-ground support team
                </span>
              </div>
              <Link to="/contact">
                <Button size="lg">
                  Request Quote for Event →
                </Button>
              </Link>
            </div>
            
            <div className="bg-card p-8 rounded-2xl card-shadow border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Buses & coaches (15-50 seaters)",
                  "Synchronized vehicle dispatch",
                  "Custom branding available",
                  "Dedicated event coordinator",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Transfer Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card p-8 rounded-2xl card-shadow border border-border order-2 lg:order-1">
              <h3 className="text-lg font-semibold text-foreground mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Domestic & international terminals",
                  "Waiting time flexibility",
                  "Corporate billing options",
                  "Premium vehicle options",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                Seamless Airport Pick-up & Drop
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Airport Transfer Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Professional airport transfer services with flight tracking, meet-and-greet 
                options, and reliable punctuality.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground">
                  <Plane className="w-4 h-4 text-primary" />
                  Real-time flight tracking
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  Meet & greet service
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  24/7 availability
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm text-foreground">
                  <Luggage className="w-4 h-4 text-primary" />
                  Luggage assistance
                </span>
              </div>
              <Link to="/contact">
                <Button size="lg">
                  Request Quote for Airport →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Transportation CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Need a Custom Transportation Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team will work with you to design a transportation plan that fits your specific 
              requirements and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">
                  Get Custom Quote →
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
