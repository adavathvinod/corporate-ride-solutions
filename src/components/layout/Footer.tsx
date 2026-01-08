import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const clients = [
  "iCIMS",
  "Mitratech",
  "Cognitus",
  "SHI",
  "RESCOM",
  "Prolifics",
  "Houlihan Lokey",
];

const Footer = () => {
  return (
    <footer className="dark-gradient text-secondary py-16">
      <div className="container mx-auto px-4">
        {/* Trusted Clients */}
        <div className="border-b border-secondary/20 pb-10 mb-10">
          <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-6">
            Trusted by Leading Corporates
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client) => (
              <span
                key={client}
                className="text-lg md:text-xl font-semibold text-secondary/70 hover:text-primary transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">A</span>
              </div>
              <span className="font-serif font-bold text-xl text-secondary">
                Aditya <span className="text-primary">Travels</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your trusted corporate travel partner in Hyderabad, delivering safe, 
              smart & sustainable rides with zero breakdown record.
            </p>
            <p className="text-xs text-muted-foreground">
              GSTIN: 36XXXXX1234X1ZX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <Link to="/technology" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Technology
              </Link>
              <Link to="/fleet-safety" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Fleet & Safety
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Our Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm">Corporate Commute</span>
              <span className="text-muted-foreground text-sm">Airport Transfers</span>
              <span className="text-muted-foreground text-sm">Outstation Trips</span>
              <span className="text-muted-foreground text-sm">Foreign Guest Support</span>
              <span className="text-muted-foreground text-sm">Event Transportation</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a href="mailto:info@adityatravels.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@adityatravels.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary/20 mt-10 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Aditya Travels. All rights reserved. | 
            <span className="text-primary ml-1">Safety First, Always</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
