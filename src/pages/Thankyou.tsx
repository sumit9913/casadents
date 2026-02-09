import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle, MessageCircle } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    // Auto scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // SEO title
    document.title = "Appointment Request Received | Casa Dent";

    // JSON-LD schema (simple + safe)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Casa Dent Multispeciality Dental & Facial Aesthetic Clinic",
      url: window.location.origin,
      medicalSpecialty: "Prosthodontics",
      areaServed: "Mumbai",
      description:
        "Appointment request confirmation page for Casa Dent. Patients can contact the clinic to confirm preferred date and time.",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const whatsappNumber = "919869991313"; // ✅ replace with your number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Casa Dent, I just submitted an appointment request on the website. Please confirm my preferred date and time.",
  )}`;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="card-premium max-w-xl w-full text-center p-8 md:p-12 animate-fade-up">
        <div className="mx-auto mb-6 grid place-items-center">
          <div className="rounded-full bg-primary/10 p-4">
            <CheckCircle className="h-14 w-14 text-primary" />
          </div>
        </div>

        <h1 className="heading-section mb-4">Appointment Request Received</h1>

        <p className="text-muted-foreground mb-8">
          Thank you for reaching out to Casa Dent. We’ve received your request
          and our team will confirm your preferred date and time shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-outline px-6 py-3 rounded-full">
            Back to Home
          </Link>

          <Link
            to="/contact#booking"
            className="btn-hero px-6 py-3 rounded-full inline-flex items-center justify-center"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Another Slot
          </Link>
        </div>

        <div className="mt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium shadow-sm transition hover:bg-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp the Clinic
          </a>

          <p className="text-xs text-muted-foreground mt-3">
            For urgent queries, you can message us on WhatsApp for faster
            confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}
