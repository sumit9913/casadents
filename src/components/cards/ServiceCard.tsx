import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export function ServiceCard({ title, description, icon: Icon, className, onClick }: ServiceCardProps) {
  return (
    <div
      className={cn("card-service group cursor-pointer", className)}
      onClick={onClick}
    >
      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="heading-card mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
