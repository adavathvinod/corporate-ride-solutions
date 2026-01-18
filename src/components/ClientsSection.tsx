const clients = [
  { name: "iCIMS", initials: "IC" },
  { name: "Mitratech", initials: "MT" },
  { name: "Cognitus", initials: "CG" },
  { name: "SHI", initials: "SH" },
  { name: "Rescom", initials: "RC" },
  { name: "Prolifics", initials: "PF" },
  { name: "Houlihan Lokey", initials: "HL" },
];

export function ClientsSection() {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider animate-fade-up">
            Our Trusted Clients
          </span>

          <h2 className="heading-section text-foreground mt-4 animate-fade-up delay-100">
            Trusted by Leading Corporations
          </h2>
        </div>

        {/* Client logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-fade-up delay-200">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-2 animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-brand transition-all duration-300">
                <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                  {client.initials}
                </span>
              </div>

              <span className="text-sm font-sans font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
