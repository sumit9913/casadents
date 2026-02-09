import { CheckCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const reasons = [
  {
    title: "Specialist Expertise",
    description: "MDS-trained prosthodontist with 15+ years of experience in advanced restorative dentistry.",
  },
  {
    title: "Premium Materials",
    description: "We use only the highest quality implants, ceramics, and materials from globally trusted brands.",
  },
  {
    title: "Comfort-First Approach",
    description: "Gentle techniques and sedation options ensure a relaxed, pain-free experience for every patient.",
  },
  {
    title: "Digital Precision",
    description: "3D imaging, digital smile design, and CAD/CAM technology for perfectly fitting restorations.",
  },
  {
    title: "Natural Results",
    description: "Artfully crafted restorations that blend seamlessly with your natural teeth and facial features.",
  },
  {
    title: "Long-Term Care",
    description: "Comprehensive warranties and follow-up care to ensure your investment lasts a lifetime.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section variant="muted">
      <SectionHeader
        title="Why Choose Casa Dent"
        subtitle="Experience the difference of specialized, personalized prosthodontic care"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft"
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-medium text-lg text-secondary mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
