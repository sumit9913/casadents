import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/constants/testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, MessageSquare } from "lucide-react";

const TestimonialsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-custom text-center">
          <div className="accent-line mx-auto mb-6" />
          <h1 className="heading-hero mb-6">Patient Testimonials</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients. Discover how we've helped transform 
            smiles and restore confidence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Happy Patients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-2">1000+</p>
            <p className="text-muted-foreground">Implants Placed</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-4xl md:text-5xl font-heading font-semibold text-primary">4.9</p>
              <Star className="h-8 w-8 text-primary fill-primary" />
            </div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-2">15+</p>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>

        <SectionHeader
          title="What Our Patients Say"
          subtitle="Every smile has a story. Here are some of ours."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <MessageSquare className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="heading-section mb-4">Share Your Story</h2>
          <p className="text-muted-foreground text-lg mb-8">
            We'd love to hear about your experience at Casa Dent. Your feedback helps us 
            serve our patients better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-hero">
              <Link to="/contact#booking">Book Your Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="btn-outline-hero">
              <a href="https://g.page/review" target="_blank" rel="noopener noreferrer">
                Leave a Google Review
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default TestimonialsPage;
