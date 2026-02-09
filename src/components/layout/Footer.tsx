import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { clinicInfo } from "@/constants/clinic";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "Dental Implants", href: "/services#dental-implants" },
    { name: "Crowns & Bridges", href: "/services#crowns-bridges" },
    { name: "Dentures", href: "/services#dentures" },
    { name: "Smile Design", href: "/services#smile-design" },
    { name: "Full Mouth Rehab", href: "/services#full-mouth-rehab" },
  ],
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Treatment Plans", href: "/treatment-plans" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQs", href: "/contact#faq" },
    { name: "Book Appointment", href: "/contact#booking" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Casa Dent" className="h-32 w-auto mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              {clinicInfo.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={clinicInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={clinicInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={clinicInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  {clinicInfo.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>Mon-Fri: {clinicInfo.hours.weekdays}</p>
                  <p>Sat: {clinicInfo.hours.saturday}</p>
                  <p>Sun: {clinicInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Casa Dent. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
