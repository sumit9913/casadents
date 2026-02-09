import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium dental clinic with happy family"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <div className="accent-line mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white leading-tight mb-6 animate-fade-in">
            Precision Dentistry.{" "}
            <span className="text-gold-light">Natural Beauty.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience the perfect blend of advanced prosthodontics and gentle care. 
            We craft smiles that look natural, feel comfortable, and last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild className="btn-hero">
              <Link to="/contact#booking">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-300">
              <Link to="/treatment-plans">
                View Treatment Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
