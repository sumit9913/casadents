import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "primary";
}

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        variant === "muted" && "bg-muted",
        variant === "primary" && "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <div className={cn("accent-line mb-6", centered && "mx-auto")} />
      <h2 className="heading-section mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
