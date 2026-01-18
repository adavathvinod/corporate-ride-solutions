import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We have been using Aditya Travel for over 6.5 years now, and the experience has been truly exceptional. The service has always been reliable, safe, and punctual. What stands out most is the professionalism and consistency. It's rare to find such dedication and trustworthiness, and we genuinely appreciate the support extended to us throughout this long association.",
    name: "Preethi Mudugal",
    title: "HR Director, Asia",
    company: "Mitratech India LLP",
  },
  {
    quote:
      "As a frequent traveller, I often have last-minute plans, and Ashok has never let me down. He's incredibly reliable, professional, and always finds a way to accommodate even the tightest schedules. The cabs are always spotless, well-maintained, and far cleaner than what most other providers offer. I also trust his service when my wife and child are travelling alone as his drivers are courteous, respectful, and make them feel completely safe and comfortable.",
    name: "Harsh Talikoti",
    title: "Director",
    company: "Houlihan Lokey",
  },
  {
    quote:
      "Cognitus has been utilizing the services of Aditya Travels for our employee and guest transportation requirements, and we are highly impressed with their professionalism, reliability, and customer focus. Their fleet is always spotless, well-maintained, and equipped with new vehicles, ensuring a smooth and comfortable journey every time. We wholeheartedly recommend them to anyone seeking a dependable, courteous, and service-oriented travel partner.",
    name: "Mohit Agrawal",
    title: "Chief Financial Officer – Asia",
    company: "Cognitus",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider animate-fade-up">
            Client Success Stories
          </span>

          <h2 className="heading-section text-foreground mt-4 animate-fade-up delay-100">
            What Our Clients Say
          </h2>

          <p className="text-body text-muted-foreground mt-4 animate-fade-up delay-200">
            Don't just take our word for it. Here's what corporate leaders have to say
            about partnering with Aditya Travels.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-xl p-8 shadow-elevated relative animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <blockquote className="text-muted-foreground font-sans text-sm leading-relaxed mt-4 mb-6">
                “{testimonial.quote}”
              </blockquote>

              <div className="border-t border-border pt-4">
                <div className="font-serif font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground font-sans">
                  {testimonial.title}
                </div>
                <div className="text-sm text-primary font-sans font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
