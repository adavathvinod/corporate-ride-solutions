import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Smartphone, Shield, BarChart3, Clock, Users, Lock, AlertTriangle, FileText, Route, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const techFeatures = [
  {
    icon: Lock,
    title: "OTP-Verified Rides",
    description: "Every ride starts with OTP verification, ensuring only authorized employees board the vehicle.",
  },
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description: "Track all your assigned vehicles in real-time through the client portal or mobile app.",
  },
  {
    icon: Route,
    title: "Route Optimization",
    description: "AI-powered routing algorithms minimize travel time and fuel consumption for efficient commutes.",
  },
  {
    icon: AlertTriangle,
    title: "SOS & Safety Alerts",
    description: "Emergency SOS button in every vehicle connected to our 24/7 control room.",
  },
  {
    icon: FileText,
    title: "Comprehensive Reporting",
    description: "Download detailed reports on usage, punctuality, cost centers, and more.",
  },
  {
    icon: Users,
    title: "Employee Self-Service",
    description: "Employees can book, modify, and track their rides through the mobile app.",
  },
];

const moveInSyncFeatures = [
  "Real-time two-way data exchange",
  "Automated trip scheduling and dispatch",
  "Live GPS tracking and ETA updates",
  "Instant billing and invoice generation",
  "Comprehensive safety compliance",
];

const apiStats = [
  { label: "API Uptime", value: "99.9%" },
  { label: "Data Sync", value: "Real-time" },
  { label: "Security", value: "SSL/TLS" },
];

const clientPortalFeatures = [
  {
    title: "Real-Time Dashboard",
    description: "View live status of all active trips, vehicle locations, and driver assignments in one place.",
    features: ["Live vehicle tracking on map", "Active trip status", "Driver details and contact", "ETA predictions"],
  },
  {
    title: "Financial Management",
    description: "Complete visibility into billing, invoices, and payment history.",
    features: ["View & download invoices", "Online payment integration", "Cost center allocation", "Budget tracking"],
  },
  {
    title: "Analytics & Reports",
    description: "Generate custom reports to analyze usage patterns and optimize costs.",
    features: ["Trip history reports", "Punctuality metrics", "Usage breakdown by department", "CSV/PDF export"],
  },
  {
    title: "User Management",
    description: "Hierarchical access control for different stakeholders.",
    features: ["Admin/HR full access", "Manage department wise", "Employee self-service", "Custom role creation"],
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* MoveInSync Integration Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Fleet Management
          </span>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                MoveInSync Integration
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our operations are powered by MoveInSync – India's leading employee 
                transportation management platform. This integration enables:
              </p>
              <ul className="space-y-3">
                {moveInSyncFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-2xl card-shadow border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">API Integration</h3>
              </div>
              <div className="space-y-4">
                {apiStats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-semibold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tech Features */}
      <section className="py-20 bg-secondary">
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

      {/* Client Portal Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Client Portal
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Secure Client Portal Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Access everything you need to manage your corporate transportation through our secure, 
              role-based client portal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {clientPortalFeatures.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl card-shadow border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Link to="/contact">
            <Button size="xl" className="rounded-full">
              Access Client Portal →
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
