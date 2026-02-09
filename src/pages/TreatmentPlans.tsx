import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { PlanCard } from "@/components/cards/PlanCard";
import { treatmentPlans, pricingDisclaimer } from "@/constants/plans";
import { Info } from "lucide-react";

const TreatmentPlansPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-custom text-center">
          <div className="accent-line mx-auto mb-6" />
          <h1 className="heading-hero mb-6">Treatment Plans & Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent, comprehensive treatment packages designed to restore your smile. 
            Each plan includes detailed consultations and personalized care.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentPlans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-accent rounded-2xl border border-border flex gap-4">
          <Info className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-secondary mb-2">Pricing Disclaimer</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {pricingDisclaimer}
            </p>
          </div>
        </div>
      </Section>

      {/* Financing Section */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            title="Flexible Payment Options"
            subtitle="We believe everyone deserves a beautiful smile. Ask about our payment plans and financing options."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-premium p-6 text-center">
              <h4 className="font-heading font-medium text-secondary mb-2">Cash & Cards</h4>
              <p className="text-sm text-muted-foreground">All major credit/debit cards accepted</p>
            </div>
            <div className="card-premium p-6 text-center">
              <h4 className="font-heading font-medium text-secondary mb-2">EMI Options</h4>
              <p className="text-sm text-muted-foreground">Easy monthly installments available</p>
            </div>
            <div className="card-premium p-6 text-center">
              <h4 className="font-heading font-medium text-secondary mb-2">Insurance</h4>
              <p className="text-sm text-muted-foreground">We work with major insurance providers</p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default TreatmentPlansPage;
