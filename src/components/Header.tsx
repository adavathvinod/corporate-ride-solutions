import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technology", href: "/technology" },
  { name: "Fleet & Safety", href: "/fleet-and-safety" },
  { name: "Contact", href: "/contact" },
];

const baseLink =
  "relative font-sans font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all";

const activeLink = "text-primary after:w-full";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#e5e7eb] transition-all duration-300 ${
        isScrolled ? "bg-background shadow-lg" : "bg-background"
      }`}
    >
      {/* TOP BAR */}
      <div className="hidden md:block bg-secondary text-secondary-foreground py-2">
        <div className="section-container flex justify-between items-center text-sm">
          <span>Safe. Reliable. 24×7 Commute.</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+918523880666"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 8523-880666
            </a>
            <a
              href="mailto:at@adityatrav.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              at@adityatrav.com
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" end className="flex flex-col items-start leading-tight">
            <img
              src={logo}
              alt="Aditya Travel"
              className="h-12 w-auto object-contain"
            />
            <span className="text-xs text-muted-foreground mt-1 tracking-wide">
              On Time. Every Time. With Care.
            </span>
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                className={baseLink}
                activeClassName={activeLink}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="brandOutline" size="lg" asChild>
              <NavLink to="/contact">Get Quote</NavLink>
            </Button>
            <Button variant="brand" size="lg" asChild>
              <a href="tel:+918523880666">
                <Phone className="w-4 h-4 mr-1" />
                Call Now
              </a>
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === "/"}
                  className="font-sans font-medium py-2 text-foreground/80"
                  activeClassName="text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="brand" size="lg" asChild>
                  <a href="tel:+918523880666">
                    <Phone className="w-4 h-4 mr-1" />
                    +91 8523-880666
                  </a>
                </Button>
                <Button variant="brandOutline" size="lg" asChild>
                  <NavLink to="/contact">Get Quote</NavLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
