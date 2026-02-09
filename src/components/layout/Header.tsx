import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Treatment Plans", href: "/treatment-plans" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setCurrentPath(window.location.pathname);
  }, []);

  // Determine if we're on the homepage for initial hero styling
  const isHomepage = currentPath === "/";
  const showDarkHeader = false;

  useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 20);
  handleScroll(); // ✅ set on load
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-3"
          : "bg-white/40 backdrop-blur-md py-5"

      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={showDarkHeader ? logoWhite : logo} 
              alt="Casa Dent" 
              className="h-12 md:h-14 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  currentPath === link.href
                    ? showDarkHeader ? "text-gold-light" : "text-primary"
                    : showDarkHeader 
                      ? "text-white/90 hover:text-gold-light" 
                      : "text-secondary hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={cn(
                "flex items-center gap-2 transition-colors",
                showDarkHeader 
                  ? "text-white/90 hover:text-gold-light" 
                  : "text-secondary hover:text-primary"
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <Button asChild className="btn-hero text-sm px-6 py-2.5">
              <Link to="/contact#booking">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2",
              showDarkHeader ? "text-white" : "text-secondary"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-elevated border-t border-border animate-slide-up">
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    currentPath === link.href
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-secondary py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+91 98765 43210</span>
                </a>
                <Button asChild className="btn-hero w-full">
                  <Link to="/contact#booking" onClick={() => setIsMobileMenuOpen(false)}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
