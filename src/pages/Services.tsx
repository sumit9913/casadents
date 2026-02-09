import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Sparkles, Crown, Smile, Heart, RefreshCw, Palette, Check, ArrowRight } from "lucide-react";
import { services } from "@/constants/services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const iconMap: Record<string, any> = {
  Sparkles,
  Crown,
  Smile,
  Heart,
  RefreshCw,
  Palette,
};

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-custom text-center">
          <div className="accent-line mx-auto mb-6" />
          <h1 className="heading-hero mb-6">Our Specialized Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert prosthodontic care combining advanced technology with artistic precision 
            to restore your smile's natural beauty and function.
          </p>
        </div>
      </section>

      {/* Services List */}
      <Section>
        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="heading-section mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-heading font-medium text-secondary mb-4">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="btn-hero">
                      <Link to="/contact#booking">
                        Book Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent to-muted flex items-center justify-center shadow-card">
                      <div className="text-center p-8">
                        <IconComponent className="h-24 w-24 text-primary/30 mx-auto mb-4" />
                        <p className="text-muted-foreground text-sm">
                          {service.title} treatment visualization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="border-b border-border mt-24" />
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            Not Sure Which Treatment is Right for You?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation and our specialist will create a personalized treatment plan 
            tailored to your unique needs and goals.
          </p>
          <Button asChild className="btn-hero">
            <Link to="/contact#booking">
              Schedule Your Consultation
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
