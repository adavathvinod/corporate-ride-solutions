import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import logo from "@/assets/logo.jpeg";

const footerLinks = {
  services: [
    { name: "Employee Commute", href: "/services" },
    { name: "Executive Travel", href: "/services" },
    { name: "Airport Transfers", href: "/services" },
    { name: "Event Logistics", href: "/services" },
    { name: "Outstation Trips", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Fleet & Safety", href: "/fleet-and-safety" },
    { name: "Technology", href: "/technology" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Top Trust Bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            {[ 
              { icon: Shield, text: "100% Safety Record" },
              { icon: Clock, text: "24/7 Support" },
              { icon: Award, text: "ISO Certified Operations" },
            ].map((item, index) => (
              <div
                key={item.text}
                className="flex items-center gap-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="animate-fade-up">
            <img
              src={logo}
              alt="Aditya Travel"
              className="h-14 w-auto object-contain mb-6 bg-background rounded-lg p-2"
            />
            <p className="text-secondary-foreground/80 font-sans text-sm leading-relaxed mb-6">
              Your corporate travel partner for safe, smart & sustainable rides.
              Trusted by leading corporations across India since 2019.
            </p>
            <p className="text-primary font-serif font-semibold italic">
              "On Time. Every Time. With Care"
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-up delay-100">
            <h4 className="font-serif font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li
                  key={link.name}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary font-sans text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-up delay-200">
            <h4 className="font-serif font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li
                  key={link.name}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary font-sans text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-up delay-300">
            <h4 className="font-serif font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              {[
                {
                  icon: Phone,
                  content: (
                    <>
                      <a href="tel:+918523880666" className="block hover:text-primary">
                        +91 8523-880666
                      </a>
                      <a href="tel:+918919543489" className="block text-secondary-foreground/80 hover:text-primary">
                        +91 89195 43489
                      </a>
                    </>
                  ),
                },
                {
                  icon: Mail,
                  content: (
                    <a href="mailto:at@adityatrav.com" className="hover:text-primary">
                      at@adityatrav.com
                    </a>
                  ),
                },
                {
                  icon: MapPin,
                  content: (
                    <span className="text-secondary-foreground/80">
                      Hyderabad, Telangana, India
                    </span>
                  ),
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="font-sans text-sm">{item.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-up">
            <p className="text-secondary-foreground/60 font-sans text-sm">
              © {currentYear} Aditya Travels. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 font-sans text-sm">
              GSTIN: 36BOAPG5682R2ZA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
