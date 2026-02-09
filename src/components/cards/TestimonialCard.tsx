import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  className?: string;
}

export function TestimonialCard({
  name,
  treatment,
  quote,
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("card-premium p-8", className)}>
      <Quote className="h-10 w-10 text-primary/20 mb-4" />

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "text-primary fill-primary" : "text-muted"
            )}
          />
        ))}
      </div>

      <p className="text-foreground leading-relaxed mb-6 italic">"{quote}"</p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-lg font-heading font-semibold text-primary">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-secondary">{name}</p>
          <p className="text-sm text-muted-foreground">{treatment}</p>
        </div>
      </div>
    </div>
  );
}
