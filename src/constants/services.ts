export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent, natural-looking tooth replacement that feels and functions just like your own teeth.",
    fullDescription: "Dental implants are the gold standard for replacing missing teeth. A small titanium post is placed in the jawbone, providing a strong foundation for a custom-made crown. The result is a permanent solution that looks, feels, and functions exactly like your natural teeth.",
    benefits: [
      "Permanent solution that can last a lifetime",
      "Preserves jawbone and facial structure",
      "No impact on adjacent healthy teeth",
      "Eat, speak, and smile with complete confidence",
      "Easy to care for like natural teeth"
    ],
    icon: "Sparkles",
    keywords: ["dental implants specialist", "implant dentist", "tooth implant", "permanent teeth replacement"]
  },
  {
    id: "crowns-bridges",
    title: "Crowns & Bridges",
    shortDescription: "Restore damaged teeth or replace missing ones with precision-crafted restorations.",
    fullDescription: "Dental crowns protect and strengthen damaged teeth, while bridges replace one or more missing teeth by anchoring to neighboring teeth. Our crowns and bridges are crafted from premium materials to match your natural teeth perfectly.",
    benefits: [
      "Restore full chewing function",
      "Natural appearance that blends seamlessly",
      "Durable and long-lasting",
      "Protect weakened or damaged teeth",
      "Maintain proper bite alignment"
    ],
    icon: "Crown",
    keywords: ["crowns and bridges", "dental crown", "tooth bridge", "tooth cap"]
  },
  {
    id: "fixed-teeth",
    title: "Fixed Teeth Replacement",
    shortDescription: "Say goodbye to removable dentures with permanent fixed teeth solutions.",
    fullDescription: "Fixed teeth replacement provides a permanent alternative to removable dentures. Using dental implants as anchors, we can create a full arch of beautiful, functional teeth that stay in place. No more adhesives, no more embarrassing slips.",
    benefits: [
      "Permanently fixed - no removal needed",
      "Superior stability and comfort",
      "Restore full chewing power",
      "Natural look and feel",
      "Simplified daily oral care"
    ],
    icon: "Smile",
    keywords: ["fixed teeth replacement", "all-on-4", "full arch implants", "permanent dentures"]
  },
  {
    id: "dentures",
    title: "Complete & Partial Dentures",
    shortDescription: "Comfortable, well-fitting dentures crafted for natural aesthetics and function.",
    fullDescription: "Whether you need to replace all teeth or just a few, our custom-crafted dentures restore your smile and confidence. We use premium materials and precise techniques to ensure optimal fit, comfort, and natural appearance.",
    benefits: [
      "Custom-fitted for maximum comfort",
      "Natural-looking teeth and gums",
      "Restore facial structure and support",
      "Affordable tooth replacement option",
      "Options for conventional or implant-supported"
    ],
    icon: "Heart",
    keywords: ["dentures clinic", "complete dentures", "partial dentures", "false teeth"]
  },
  {
    id: "full-mouth-rehab",
    title: "Full-Mouth Rehabilitation",
    shortDescription: "Comprehensive restoration for patients with multiple dental concerns.",
    fullDescription: "Full-mouth rehabilitation is a comprehensive treatment plan that addresses multiple dental issues at once. We combine various procedures like implants, crowns, bridges, and more to completely restore your oral health, function, and aesthetics.",
    benefits: [
      "Complete transformation of your smile",
      "Address multiple issues in coordinated plan",
      "Improved bite function and comfort",
      "Long-term oral health solution",
      "Personalized treatment timeline"
    ],
    icon: "RefreshCw",
    keywords: ["full mouth rehabilitation", "complete dental restoration", "smile reconstruction", "dental makeover"]
  },
  {
    id: "smile-design",
    title: "Smile Design & Esthetics",
    shortDescription: "Artistically designed smiles that enhance your natural beauty.",
    fullDescription: "Our smile design service combines art and science to create your perfect smile. Using digital planning and premium materials, we design restorations that complement your facial features, skin tone, and personality for a naturally beautiful result.",
    benefits: [
      "Customized to your unique features",
      "Digital smile preview before treatment",
      "Premium esthetic materials",
      "Harmonious, natural-looking results",
      "Boost confidence and self-esteem"
    ],
    icon: "Palette",
    keywords: ["smile makeover", "smile design", "esthetic dentistry", "cosmetic dentistry"]
  }
];
