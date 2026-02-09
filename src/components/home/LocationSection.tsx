import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/constants/clinic";

export function LocationSection() {
  return (
    <Section variant="muted">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Map Embed */}
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

        {/* Contact Info */}
        <div>
          <div className="accent-line mb-6" />
          <h2 className="heading-section mb-6">Visit Our Clinic</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Experience premium dental care in a comfortable, state-of-the-art facility. 
            We're conveniently located and ready to welcome you.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-secondary mb-1">Address</p>
                <p className="text-muted-foreground">{clinicInfo.address.full}</p>
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
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {clinicInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-secondary mb-1">Working Hours</p>
                <p className="text-muted-foreground">Mon-Fri: {clinicInfo.hours.weekdays}</p>
                <p className="text-muted-foreground">Sat: {clinicInfo.hours.saturday}</p>
              </div>
            </div>
          </div>

          <Button asChild className="btn-hero">
            <Link to="/contact#booking">
              Book Your Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
