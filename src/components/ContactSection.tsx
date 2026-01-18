import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8523-880666",
    href: "tel:+918523880666",
    secondary: "+91 89195 43489",
    secondaryHref: "tel:+918919543489",
  },
  {
    icon: Mail,
    label: "Email",
    value: "at@adityatrav.com",
    href: "mailto:at@adityatrav.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana, India",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24/7 Available",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing required fields",
        description: "Please fill Name, Email and Phone number.",
        variant: "destructive",
      });
      return;
    }

    const whatsappNumber = "918523880666"; // BUSINESS WHATSAPP NUMBER (no +)

    const whatsappMessage = `
*Corporate Travel Quote Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company || "N/A"}

*Requirements:*
${formData.message || "Not specified"}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "Please send the message to complete your request.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h2 className="heading-section text-foreground">
                Ready to Transform Your Corporate Travel?
              </h2>
              <p className="text-body text-muted-foreground mt-4">
                Get a customized quote tailored to your company's transportation
                needs. Our team will respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-foreground">
                        {item.value}
                      </div>
                    )}

                    {item.secondary && (
                      <a
                        href={item.secondaryHref}
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        {item.secondary}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* BUSINESS INFO */}
            <div className="p-6 bg-muted rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Aditya Travels
              </h3>
              <p className="text-sm text-muted-foreground">
                GSTIN: 36BOAPG5682R2ZA
              </p>
              <p className="text-sm text-muted-foreground">
                Website: www.adityatrav.com
              </p>
              <p className="text-primary font-semibold mt-4 italic">
                "Aditya Travels – On Time. Every Time. With Care"
              </p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-card rounded-xl p-8 shadow-elevated border border-border">
            <h3 className="heading-card text-foreground mb-6">
              Request Corporate Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border resize-none"
                  placeholder="Tell us about your transportation needs..."
                />
              </div>

              <Button
                type="submit"
                variant="brand"
                size="xl"
                className="w-full flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
