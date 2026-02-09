import { clinicInfo } from "@/constants/clinic";

interface BookingEmbedProps {
  className?: string;
}

export function BookingEmbed({ className }: BookingEmbedProps) {
  return (
    <div id="booking" className={className}>
      <div className="card-premium p-8 md:p-12">
        <div className="text-center mb-8">
          <h3 className="heading-section mb-4">Schedule Your Consultation</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose a convenient time for your appointment. We'll confirm your booking within 24 hours.
          </p>
        </div>

        {/* Calendly Embed Placeholder */}
        <div className="bg-muted rounded-xl p-8 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Calendar booking widget will appear here
            </p>
            <p className="text-sm text-muted-foreground">
              Configure your Calendly URL in <code className="bg-background px-2 py-1 rounded">src/constants/clinic.ts</code>
            </p>
            <div className="mt-6">
              <a
                href={clinicInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center px-8 py-3 rounded-full"
              >
                Open Booking Calendar
              </a>
            </div>
          </div>
        </div>

        {/* Alternative: Direct Calendly iframe when URL is set */}
        {/* 
        <iframe
          src={`${clinicInfo.calendlyUrl}?hide_gdpr_banner=1&background_color=faf9f7&text_color=3d3428&primary_color=a67c52`}
          width="100%"
          height="700"
          frameBorder="0"
          className="rounded-xl"
        />
        */}
      </div>
    </div>
  );
}
