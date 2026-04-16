"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-background" id="work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Our Work
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Results That Speak
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/work">View All Projects</Link>
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Featured Case Study */}
          <Link
            href={`/work/${caseStudies[activeIndex].slug}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-foreground lg:row-span-2 lg:aspect-auto"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '30px 30px',
            }} />

            {/* Content */}
            <div className="relative flex h-full flex-col justify-between p-8 text-background">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {caseStudies[activeIndex].category.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs backdrop-blur-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title & Client */}
              <div>
                <p className="text-sm text-background/60">{caseStudies[activeIndex].client}</p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                  {caseStudies[activeIndex].title}
                </h3>
                <p className="mt-4 text-background/70 leading-relaxed max-w-lg">
                  {caseStudies[activeIndex].description}
                </p>

                {/* Metrics */}
                <div className="mt-8 flex flex-wrap gap-8">
                  {caseStudies[activeIndex].metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-sm text-background/60">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="mt-8 flex items-center gap-2 text-sm font-medium">
                  <span>View Case Study</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study List */}
          <div className="flex flex-col gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group flex items-center gap-6 rounded-xl border p-4 text-left transition-all duration-300",
                  index === activeIndex
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card hover:border-foreground/20 hover:shadow-md"
                )}
              >
                {/* Number */}
                <span className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                  index === activeIndex
                    ? "bg-background text-foreground"
                    : "bg-muted text-muted-foreground"
                )}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-xs",
                    index === activeIndex ? "text-background/60" : "text-muted-foreground"
                  )}>
                    {study.client}
                  </p>
                  <h4 className="mt-1 font-semibold truncate">{study.title}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {study.category.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className={cn(
                          "text-xs",
                          index === activeIndex ? "text-background/70" : "text-muted-foreground"
                        )}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform",
                    index === activeIndex ? "text-background" : "text-muted-foreground"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
