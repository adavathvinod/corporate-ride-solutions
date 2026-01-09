import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Users, CheckCircle, MapPin, Star, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import StatCounter from "@/components/home/StatCounter";
import heroImage from "@/assets/hero-driver-sedan.png";
import teamImage from "@/assets/team-aditya-travels.png";

const stats = [
  { icon: Clock, value: 6, label: "Years Experience", suffix: "+" },
  { icon: Users, value: 100, label: "Professional Drivers", suffix: "" },
  { icon: Award, value: 80, label: "Satisfied Clients", suffix: "+" },
  { icon: Shield, value: 250, label: "Trips Per Day", suffix: "+" },
];

const features = [
  {
    icon: CheckCircle,
    title: "Zero Breakdown Record",
    description: "Impeccable fleet maintenance ensures your journey is never interrupted.",
  },
  {
    icon: Shield,
    title: "100% Verified Drivers",
    description: "Background checked and police verified professional chauffeurs.",
  },
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "Monitor every trip in real-time with MoveInSync integration.",
  },
];

const testimonials = [
  {
    quote: "Aditya Travels has been our trusted transportation partner for 5 years. Their zero breakdown record speaks volumes about their commitment.",
    author: "Director, Mitratech",
    rating: 5,
  },
  {
    quote: "Professional drivers, punctual service, and excellent fleet management. Highly recommended for corporate transportation needs.",
    author: "Operations Head, Houlihan Lokey",
    rating: 5,
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 19+ Leading Corporations
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Your Premier <span className="text-primary">Corporate Travel</span> Partner
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Technology-driven employee commute and executive transportation solutions. Safe, reliable, and available 24×7 across India.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <span className="inline-flex items-center gap-2 text-sm text-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  Background Verified
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  24/7 Available
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  GPS Tracked
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="xl">
                    Request Corporate Quote
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button variant="outline" size="xl" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Professional chauffeur driving corporate sedan"
                  className="w-full h-[350px] md:h-[450px] object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 left-0 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-border/20">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">6+ Years</div>
                  <div className="text-sm text-muted-foreground">Trusted Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Your Corporate Travel, Our Priority
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl card-shadow hover:elevated-shadow transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
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

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                Brand Ambassadors on Wheels
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our drivers are more than chauffeurs – they're trained professionals 
                representing your corporate image. Each driver undergoes rigorous 
                background verification, police clearance, and regular training sessions.
              </p>
              <ul className="space-y-3 mb-8">
                {["100% Background Verified", "Police Clearance Certified", "English-speaking Chauffeurs", "Customer Service Trained"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services">
                <Button variant="cta" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Aditya Travels professional driver team"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Trained Drivers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl card-shadow border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-primary font-semibold">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Elevate Your Corporate Transportation?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join 50+ leading corporations who trust Aditya Travels for their 
            employee transportation needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Get a Quote
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
