import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < Math.min(visibleCount, testimonials.length); i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <Section>
      <SectionHeader
        title="Patient Stories"
        subtitle="Hear from our patients about their journey to a confident smile"
      />

      <div className="relative">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              {...testimonial}
              className="animate-fade-in"
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <TestimonialCard
            {...testimonials[currentIndex]}
            className="animate-fade-in"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-border"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
