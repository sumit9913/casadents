import { Award, Shield, Heart, Microscope } from "lucide-react";

const trustItems = [
  { icon: Award, text: "15+ Years Experience", subtext: "Expert prosthodontist" },
  { icon: Shield, text: "100% Sterilization", subtext: "International standards" },
  { icon: Heart, text: "Gentle Care", subtext: "Comfort-first approach" },
  { icon: Microscope, text: "Advanced Tech", subtext: "Digital precision" },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              </div>
              <div>
                <p className="font-medium text-secondary text-sm md:text-base">{item.text}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
