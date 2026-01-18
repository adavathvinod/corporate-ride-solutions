import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  MapPin,
  Shield,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
} from "lucide-react";
import { SEO } from "@/components/SEO";

/* ---------------- DATA ---------------- */

const integrationFeatures = [
  {
    icon: Smartphone,
    title: "OTP-Verified Rides",
    description:
      "Every ride starts with OTP verification, ensuring only authorized employees board the vehicle.",
  },
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description:
      "Track assigned vehicles live through the client portal or mobile app.",
  },
  {
    icon: Zap,
    title: "Route Optimization",
    description:
      "AI-powered routing minimizes travel time and fuel consumption.",
  },
  {
    icon: Shield,
    title: "SOS & Safety Alerts",
    description:
      "Emergency SOS button in every vehicle connected to a 24/7 control room.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Reporting",
    description:
      "Detailed reports on trips, punctuality, costs, and compliance.",
  },
  {
    icon: Users,
    title: "Employee Self-Service",
    description:
      "Employees can book, modify, and track rides via the mobile app.",
  },
];

const clientPortalFeatures = [
  {
    title: "Real-Time Dashboard",
    description: "Live visibility into all trips, vehicles, and drivers.",
    items: ["Live GPS tracking", "Active trip status", "Driver details", "ETA predictions"],
  },
  {
    title: "Financial Management",
    description: "Complete control over billing and payments.",
    items: ["Invoices & billing", "Online payments", "Cost center allocation", "Budget tracking"],
  },
  {
    title: "Analytics & Reports",
    description: "Custom reports to analyze usage and optimize costs.",
    items: ["Trip history", "Punctuality metrics", "Department-wise usage", "CSV / PDF export"],
  },
  {
    title: "User Management",
    description: "Role-based access for all stakeholders.",
    items: ["Admin / HR access", "Manager-level views", "Employee self-service", "Custom roles"],
  },
];

/* ---------------- PAGE ---------------- */

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Transportation Technology | Aditya Travel"
        description="MoveInSync-powered corporate transportation technology by Aditya Travel."
        url="https://adityatrav.com/technology"
      />

      <Header />

      <main className="pt-28">
        {/* HERO */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="section-container text-center">
            <h1 className="heading-section text-white animate-fade-up">
              Powered by MoveInSync Integration
            </h1>
            <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
              Seamless, secure, and intelligent corporate transportation with real-time visibility and safety.
            </p>
          </div>
        </section>

        {/* INTEGRATION OVERVIEW */}
        <section className="py-20">
          <div className="section-container grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
                Fleet Management
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up delay-100">
                MoveInSync Integration
              </h2>
              <p className="text-muted-foreground mb-6 animate-fade-up delay-200">
                Our operations run on India’s leading employee transportation management platform, enabling:
              </p>

              <ul className="space-y-3">
                {[
                  "Automated trip scheduling",
                  "Live GPS & ETA updates",
                  "Instant billing & invoicing",
                  "Safety & compliance tracking",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* API CARD */}
            <div className="bg-card rounded-2xl border p-8 animate-fade-up delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Cpu className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">API Integration</h3>
                  <p className="text-sm text-muted-foreground">Real-time two-way sync</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "API Uptime", value: "99.9%", color: "text-green-600" },
                  { label: "Data Sync", value: "Real-time", color: "text-primary" },
                  { label: "Security", value: "SSL / TLS", color: "" },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className="flex justify-between p-3 bg-muted rounded-lg animate-fade-up"
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                  >
                    <span>{row.label}</span>
                    <span className={`font-semibold ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl border p-6 hover:shadow-lg transition animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLIENT PORTAL */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 animate-fade-up">
                Secure Client Portal
              </h2>
              <p className="text-muted-foreground animate-fade-up delay-100">
                Manage transportation, billing, and analytics from one dashboard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {clientPortalFeatures.map((feature, i) => (
                <div
                  key={feature.title}
                  className="bg-background p-8 rounded-2xl border animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 animate-fade-up">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">
              See Our Technology in Action
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a demo and discover how our platform simplifies corporate transportation.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">Request Demo</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Technology;
