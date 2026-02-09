import { cn } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PlanCardProps {
  name: string;
  idealFor: string;
  description: string;
  inclusions: string[];
  timeline: string;
  priceRange: string;
  popular?: boolean;
  className?: string;
}

export function PlanCard({
  name,
  idealFor,
  description,
  inclusions,
  timeline,
  priceRange,
  popular,
  className,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "card-premium relative flex flex-col",
        popular && "ring-2 ring-primary",
        className
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-6">
          <h3 className="heading-card mb-2">{name}</h3>
          <p className="text-sm text-primary font-medium">{idealFor}</p>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">What's included:</p>
          <ul className="space-y-2">
            {inclusions.slice(0, 4).map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
            {inclusions.length > 4 && (
              <li className="text-sm text-muted-foreground pl-6">
                +{inclusions.length - 4} more included
              </li>
            )}
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="text-xl font-heading font-semibold text-secondary">
                {priceRange}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Timeline</p>
              <p className="text-sm font-medium">{timeline}</p>
            </div>
          </div>

          <Button asChild className="w-full btn-hero text-sm py-3">
            <Link to="/contact#booking">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
