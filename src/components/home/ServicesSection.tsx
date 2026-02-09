import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Crown, Smile, Heart, RefreshCw, Palette } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/constants/services";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, any> = {
  Sparkles,
  Crown,
  Smile,
  Heart,
  RefreshCw,
  Palette,
};

export function ServicesSection() {
  return (
    <Section variant="muted">
      <SectionHeader
        title="Our Specialized Services"
        subtitle="Expert prosthodontic care tailored to restore your smile with precision and artistry"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || Sparkles;
          return (
            <Link key={service.id} to={`/services#${service.id}`}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={IconComponent}
              />
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" className="btn-outline-hero">
          <Link to="/services">
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
