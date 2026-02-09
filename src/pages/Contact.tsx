import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { BookingEmbed } from "@/components/booking/BookingEmbed";
import { clinicInfo } from "@/constants/clinic";
import { faqs } from "@/constants/faqs";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-custom text-center">
          <div className="accent-line mx-auto mb-6" />
          <h1 className="heading-hero mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help you on your journey to a beautiful smile. 
            Reach out to us or book your appointment today.
          </p>
        </div>
      </section>

      {/* Contact Info & Booking */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="heading-card mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary mb-1">Address</p>
                    <p className="text-muted-foreground text-sm">{clinicInfo.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary mb-1">Phone</p>
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary mb-1">Email</p>
                    <a
                      href={`mailto:${clinicInfo.email}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary mb-1">Hours</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri: {clinicInfo.hours.weekdays}</p>
                    <p className="text-muted-foreground text-sm">Sat: {clinicInfo.hours.saturday}</p>
                    <p className="text-muted-foreground text-sm">Sun: {clinicInfo.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <Button asChild className="w-full btn-hero">
                <a href={`tel:${clinicInfo.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full btn-outline-hero">
                <a
                  href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="lg:col-span-2">
            <BookingEmbed />
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section variant="muted">
        <SectionHeader
          title="Find Us"
          subtitle="Conveniently located for easy access"
        />
        <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
          <iframe
            src={clinicInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          />
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faq">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our treatments and procedures"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-secondary hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;
