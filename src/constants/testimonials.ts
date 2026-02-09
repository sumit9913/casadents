export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    treatment: "Dental Implants",
    quote: "After losing my teeth, I thought I'd never smile confidently again. Dr. Casa Dent gave me a new set of fixed teeth that look and feel completely natural. The team made the entire journey comfortable and stress-free.",
    rating: 5
  },
  {
    id: "2",
    name: "Priya Sharma",
    treatment: "Smile Makeover",
    quote: "I was always conscious about my discolored and uneven teeth. The smile makeover transformed not just my smile, but my confidence. The attention to detail and personalized care exceeded all my expectations.",
    rating: 5
  },
  {
    id: "3",
    name: "Mohammed Ali",
    treatment: "Full Mouth Rehabilitation",
    quote: "Years of dental problems were resolved in one comprehensive treatment plan. The clinic's modern technology and the doctor's expertise made a complex procedure feel simple. I can eat anything now!",
    rating: 5
  },
  {
    id: "4",
    name: "Sunita Devi",
    treatment: "Premium Dentures",
    quote: "I was nervous about getting dentures at my age, but the team put me at ease. My new dentures fit perfectly and look so natural that even my family couldn't tell the difference.",
    rating: 5
  },
  {
    id: "5",
    name: "Vikram Singh",
    treatment: "Crowns & Bridges",
    quote: "The quality of work here is exceptional. My dental bridge looks exactly like my natural teeth. The clinic environment is luxurious yet welcoming, and the staff treats you like family.",
    rating: 5
  }
];
