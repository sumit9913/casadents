import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { clinicInfo } from "@/constants/clinic";
import { Award, GraduationCap, Heart, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const credentials = [
  { icon: GraduationCap, text: "MDS in Prosthodontics from premier institution" },
  { icon: Award, text: "15+ years of clinical experience" },
  { icon: Target, text: "Specialized training in dental implants" },
  { icon: Heart, text: "Known for gentle, patient-centric approach" },
];

const clinicFeatures = [
  "State-of-the-art digital imaging and 3D CT scan",
  "CAD/CAM technology for precise restorations",
  "Fully equipped sterilization with international protocols",
  "Comfortable, spa-like patient environment",
  "Dedicated consultation rooms for privacy",
  "Advanced surgical operatory for implant procedures",
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-custom text-center">
          <div className="accent-line mx-auto mb-6" />
          <h1 className="heading-hero mb-6">About Casa Dent</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where precision meets artistry in creating smiles that transform lives.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-accent to-muted flex items-center justify-center shadow-card">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl font-heading font-semibold text-primary">
                  {clinicInfo.doctor.name.charAt(4)}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">Doctor's photograph</p>
            </div>
          </div>

          <div>
            <div className="accent-line mb-6" />
            <p className="text-primary font-medium mb-2">{clinicInfo.doctor.title}</p>
            <h2 className="heading-section mb-2">{clinicInfo.doctor.name}</h2>
            <p className="text-muted-foreground mb-6">{clinicInfo.doctor.qualification}</p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {clinicInfo.doctor.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-start gap-3">
                  <cred.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{cred.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Clinic Section */}
      <Section variant="muted">
        <SectionHeader
          title="Our Clinic"
          subtitle="A premium, comfortable environment designed for exceptional patient experiences"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Casa Dent is more than a dental clinic—it's a sanctuary where advanced technology 
              meets warm hospitality. Every aspect of our facility is designed to ensure your 
              comfort while delivering world-class prosthodontic care.
            </p>

            <div className="space-y-4">
              {clinicFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-video rounded-2xl bg-gradient-to-br from-accent to-muted flex items-center justify-center shadow-card">
            <div className="text-center p-8">
              <p className="text-muted-foreground text-sm">Clinic interior images</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="heading-section mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            "To provide exceptional prosthodontic care that transforms smiles and improves lives, 
            combining cutting-edge technology with compassionate, personalized treatment in 
            an environment of warmth and trust."
          </p>
          <Button asChild className="btn-hero">
            <Link to="/contact#booking">Experience the Casa Dent Difference</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;
