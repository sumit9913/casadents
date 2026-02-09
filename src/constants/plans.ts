export interface TreatmentPlan {
  id: string;
  name: string;
  idealFor: string;
  description: string;
  inclusions: string[];
  timeline: string;
  priceRange: string;
  popular?: boolean;
}

export const treatmentPlans: TreatmentPlan[] = [
  {
    id: "single-implant",
    name: "Single Tooth Implant",
    idealFor: "Replacing one missing tooth",
    description: "A complete solution for single tooth replacement with a dental implant and custom crown.",
    inclusions: [
      "Comprehensive consultation & evaluation",
      "3D CT scan & treatment planning",
      "Premium titanium implant placement",
      "Healing abutment",
      "Custom ceramic crown",
      "All follow-up appointments"
    ],
    timeline: "3-6 months",
    priceRange: "₹35,000 - ₹55,000"
  },
  {
    id: "multiple-implants",
    name: "Multiple Implants Package",
    idealFor: "Replacing 2-4 missing teeth",
    description: "Cost-effective solution for replacing multiple teeth in the same area.",
    inclusions: [
      "Full diagnostic workup",
      "3D imaging & surgical guide",
      "Multiple implant placements",
      "Implant-supported bridge",
      "Premium ceramic restorations",
      "Complete aftercare program"
    ],
    timeline: "4-8 months",
    priceRange: "₹80,000 - ₹1,50,000",
    popular: true
  },
  {
    id: "full-arch",
    name: "Full Arch Restoration",
    idealFor: "Replacing all teeth (upper or lower)",
    description: "Complete fixed teeth replacement for an entire arch using 4-6 implants.",
    inclusions: [
      "Comprehensive oral evaluation",
      "Full 3D treatment planning",
      "4-6 implants per arch",
      "Immediate temporary teeth (same day)",
      "Final fixed hybrid prosthesis",
      "5-year warranty on implants"
    ],
    timeline: "6-12 months",
    priceRange: "₹2,50,000 - ₹4,00,000"
  },
  {
    id: "smile-makeover",
    name: "Complete Smile Makeover",
    idealFor: "Enhancing smile aesthetics",
    description: "Transform your smile with a customized combination of cosmetic treatments.",
    inclusions: [
      "Digital smile design session",
      "Teeth whitening",
      "Up to 8 ceramic veneers or crowns",
      "Smile preview (mock-up)",
      "Color & shape customization",
      "Maintenance guidance"
    ],
    timeline: "2-4 weeks",
    priceRange: "₹1,20,000 - ₹2,40,000",
    popular: true
  },
  {
    id: "denture-package",
    name: "Premium Denture Package",
    idealFor: "Complete or partial tooth replacement",
    description: "High-quality, comfortable dentures for a natural-looking smile.",
    inclusions: [
      "Consultation & impressions",
      "Try-in appointment",
      "Premium acrylic or flexible denture",
      "Custom shade matching",
      "Adjustments included",
      "Care kit & instructions"
    ],
    timeline: "2-3 weeks",
    priceRange: "₹25,000 - ₹60,000"
  },
  {
    id: "full-mouth-rehab",
    name: "Full Mouth Rehabilitation",
    idealFor: "Complex cases with multiple issues",
    description: "Comprehensive restoration addressing all dental concerns with a coordinated treatment plan.",
    inclusions: [
      "Complete diagnostic evaluation",
      "Customized treatment plan",
      "All necessary procedures included",
      "Implants, crowns, bridges as needed",
      "Bite rehabilitation",
      "Extended warranty & follow-ups"
    ],
    timeline: "6-18 months",
    priceRange: "₹3,00,000 - ₹8,00,000"
  }
];

export const pricingDisclaimer = "All prices are indicative starting ranges. Final treatment cost will be determined after clinical evaluation and depends on individual case complexity, materials selected, and specific treatment requirements.";
