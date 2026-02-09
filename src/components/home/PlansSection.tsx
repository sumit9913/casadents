import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { PlanCard } from "@/components/cards/PlanCard";
import { treatmentPlans } from "@/constants/plans";
import { Button } from "@/components/ui/button";

export function PlansSection() {
  // Show only popular plans on homepage
  const featuredPlans = treatmentPlans.filter((plan) => plan.popular).slice(0, 2);

  return (
    <Section>
      <SectionHeader
        title="Featured Treatment Plans"
        subtitle="Transparent pricing with comprehensive care packages designed for your needs"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {featuredPlans.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" className="btn-outline-hero">
          <Link to="/treatment-plans">
            View All Treatment Plans
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
