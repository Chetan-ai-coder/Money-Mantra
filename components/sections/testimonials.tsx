"use client";

import { useState, useEffect, useCallback } from "react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-background/60">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mt-16 relative">
          <div className="mx-auto max-w-4xl flex flex-col gap-25 md:gap-8">
            {/* Quote Mark */}
            <svg
              className="absolute -top-12 md:-top-8 left-0 h-15 w-15 md:h-24 md:w-24 text-background/10 lg:-left-12"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>

            {/* Testimonial Content */}
            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  )}
                >
                  <blockquote className="text-xl leading-relaxed sm:text-2xl lg:text-3xl font-light text-pretty">
                    {`"${testimonial.quote}"`}
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/10 text-lg font-semibold">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-background/60">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-background"
                      : "w-2 bg-background/30 hover:bg-background/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
