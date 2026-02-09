import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-brown" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-1 bg-gradient-to-r from-gold-light to-primary rounded-full mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Take the first step towards a confident, beautiful smile. 
            Schedule your personalized consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-hero">
              <Link to="/contact#booking">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-300">
              <Link to="/treatment-plans">
                Explore Treatment Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
