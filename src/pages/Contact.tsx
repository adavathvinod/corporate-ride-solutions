import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    action: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@adityatravels.com", "bookings@adityatravels.com"],
    action: "mailto:info@adityatravels.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["HITEC City, Hyderabad", "Telangana, India - 500081"],
    action: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["24/7 Operations", "Support: 6 AM - 10 PM"],
    action: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you for your inquiry! Our team will contact you within 24 hours.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your corporate transportation? Contact us for a customized 
            quote or schedule a consultation with our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        item.action ? (
                          <a
                            key={i}
                            href={item.action}
                            className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-card rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-[hsl(142,70%,45%)]" />
                    <span className="text-foreground text-sm font-medium">WhatsApp Chat</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 p-3 bg-card rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground text-sm font-medium">Call Now</span>
                  </a>
                </div>
              </div>

              {/* GSTIN */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>GSTIN:</strong> 36XXXXX1234X1ZX
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-2xl card-shadow border border-border">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="corporate-commute">Corporate Commute</option>
                      <option value="airport-transfers">Airport Transfers</option>
                      <option value="outstation">Outstation Trips</option>
                      <option value="group-transport">Group Transportation</option>
                      <option value="monthly-contract">Monthly Contract</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message / Requirements
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your transportation requirements..."
                      rows={5}
                      className="bg-background"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground mt-2">
              HITEC City, Hyderabad, Telangana
            </p>
          </div>
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden card-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.23432959559!2d78.35486875!3d17.4469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704891234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aditya Travels Office Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
