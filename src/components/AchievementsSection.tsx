import { Award, CheckCircle, Users, ThumbsUp, Cog } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Zero Vehicle Breakdowns",
    description: "Since inception - maintaining a flawless operational record",
  },
  {
    icon: Users,
    title: "100% Client Retention",
    description: "Every contract renewed year after year",
  },
  {
    icon: ThumbsUp,
    title: "Excellent Client Feedback",
    description: "Trusted reputation in the IT commute space",
  },
  {
    icon: Cog,
    title: "Seamless MoveInSync Adoption",
    description: "Ensuring transparency and efficiency in every operation",
  },
];

export function AchievementsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: ACHIEVEMENTS */}
          <div className="space-y-8 animate-fade-up">
            
            {/* Section Header */}
            <div>
              <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider animate-fade-up">
                Our Achievements
              </span>

              <h2 className="heading-section text-foreground mt-4 animate-fade-up delay-100">
                A Track Record of{" "}
                <span className="text-primary">Excellence</span>
              </h2>
            </div>

            {/* Achievement Cards */}
            <div className="grid sm:grid-cols-2 gap-6 animate-fade-up delay-200">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-sm">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-1">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: TECHNOLOGY HIGHLIGHTS */}
          <div className="bg-secondary rounded-2xl p-8 animate-fade-up delay-300">
            <h3 className="heading-card text-primary mb-6 animate-fade-up delay-400">
              Technology-Driven Operations
            </h3>

            <p className="text-secondary-foreground font-sans mb-6 animate-fade-up delay-500">
              Partnered with MoveInSync, we bring technology to your doorstep:
            </p>

            <ul className="space-y-4">
              {[
                "Contactless, OTP-verified rides for employee safety",
                "Real-time tracking of vehicles and driver movements",
                "Optimized route mapping for minimal commute time and maximum efficiency",
                "Detailed daily reports and billing transparency",
              ].map((text, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground font-sans text-sm">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-secondary-foreground/20 animate-fade-up delay-1000">
              <p className="text-primary font-serif font-semibold text-lg italic text-center">
                "Aditya Travels – On Time. Every Time. With Care"
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
