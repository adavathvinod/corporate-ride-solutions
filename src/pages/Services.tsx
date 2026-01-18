import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Users,
  Car,
  CheckCircle,
  MapPin,
  Route,
  FileText,
  Shield,
  Clock,
  UserCheck,
  Calendar,
  Bus,
  Headphones,
  Luggage,
} from "lucide-react";
import { SEO } from "@/components/SEO";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Aditya Travel | Corporate Transportation Partner in Hyderabad"
        description="Safe, reliable 24x7 corporate employee commute and executive transportation in Hyderabad."
        url="https://adityatrav.com"
      />

      <Header />

      <main className="pt-28">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="section-container text-center">
            <h1 className="heading-section text-white animate-fade-up">
              Comprehensive Corporate Transportation Solutions
            </h1>
            <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
              From daily employee commute to executive travel and event logistics —
              we provide tailored solutions for every corporate transportation need.
            </p>
          </div>
        </section>

        {/* Employee Commute */}
        <section className="py-20 bg-background">
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="badge mb-4 inline-block">Daily Pick-up & Drop Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Employee Commute Services
              </h2>
              <p className="text-muted-foreground mb-8">
                Reliable daily transportation with technology-enabled operations.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Shield, text: "OTP-verified rides" },
                  { icon: MapPin, text: "Real-time GPS tracking" },
                  { icon: Route, text: "Route optimization" },
                  { icon: FileText, text: "Daily reports" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.text}
                  </span>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg">Request Quote for Employee →</Button>
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border animate-fade-up delay-200">
              <h3 className="font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Reduced absenteeism",
                  "Improved employee satisfaction",
                  "Cost-effective fleet management",
                  "MoveInSync integration",
                ].map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Executive Travel */}
        <section className="py-20 bg-muted">
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card p-8 rounded-2xl border border-border animate-fade-up order-2 lg:order-1">
              <h3 className="font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Luxury vehicles",
                  "Professional chauffeurs",
                  "In-car amenities",
                  "24/7 availability",
                ].map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up order-1 lg:order-2">
              <span className="badge mb-4 inline-block">Premium Chauffeur Experience</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Executive Travel Services
              </h2>
              <p className="text-muted-foreground mb-8">
                Exclusive travel solutions for CXOs and leadership teams.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: UserCheck, text: "Confidential service" },
                  { icon: Shield, text: "Verified chauffeurs" },
                  { icon: Calendar, text: "Flexible scheduling" },
                  { icon: Users, text: "Dedicated manager" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.text}
                  </span>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg">Request Quote for Executive →</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Event Logistics */}
        <section className="py-20 bg-background">
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="badge mb-4 inline-block">Corporate Events</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Event Logistics
              </h2>
              <p className="text-muted-foreground mb-8">
                End-to-end transport for conferences and large gatherings.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[Bus, MapPin, Calendar, Headphones].map((Icon, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    Professional coordination
                  </span>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg">Request Quote for Event →</Button>
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border animate-fade-up delay-200">
              <h3 className="font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "15–50 seater buses",
                  "Synchronized dispatch",
                  "Custom branding",
                  "Event coordinator",
                ].map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Airport Transfers */}
        <section className="py-20 bg-muted">
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card p-8 rounded-2xl border border-border animate-fade-up order-2 lg:order-1">
              <h3 className="font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "All terminals",
                  "Flexible waiting",
                  "Corporate billing",
                  "Premium vehicles",
                ].map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up order-1 lg:order-2">
              <span className="badge mb-4 inline-block">Airport Pick-up & Drop</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Airport Transfer Services
              </h2>
              <p className="text-muted-foreground mb-8">
                Flight tracking, meet & greet, and punctual service.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[Plane, Users, Clock, Luggage].map((Icon, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    Premium experience
                  </span>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg">Request Quote for Airport →</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background animate-fade-up">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Transportation Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We’ll design a plan that fits your requirements and budget.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">Get Custom Quote →</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
