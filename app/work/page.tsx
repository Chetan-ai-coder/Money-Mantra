"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { CTASection } from "@/components/sections/cta-section";

const filters = [
  "All",
  "Brand Identity",
  "Web Development",
  "Digital Strategy",
  "Performance Marketing",
  "Social Media",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) =>
          study.category.includes(activeFilter)
        );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-background/60">
              Our Work
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance leading-tight">
              Results That Speak
            </h1>

            <p className="mt-6 text-base sm:text-lg text-background/70 leading-relaxed text-pretty">
              Explore our portfolio of transformative projects and the measurable
              impact we have delivered for brands across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-6 sm:py-8 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {filters.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeFilter === tag
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {filteredStudies.map((study, index) => (
              <Link
                key={study.id}
                href={`/work/${study.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-foreground transition-all duration-300 hover:shadow-2xl ${
                  index === 0
                    ? "sm:col-span-2 min-h-[450px] sm:aspect-[2/1]"
                    : "aspect-[4/5] sm:aspect-[4/3]"
                }`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Number */}
                <div className="absolute right-4 top-4 sm:right-8 sm:top-8 text-5xl sm:text-7xl font-bold text-background/10 transition-all group-hover:text-background/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 text-background">
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 pr-10 sm:pr-0">
                    {study.category.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-background/20 bg-background/10 px-3 py-1 text-[10px] sm:text-xs backdrop-blur-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <p className="text-xs sm:text-sm text-background/60">
                      {study.client}
                    </p>

                    <h3
                      className={`mt-2 font-bold leading-tight ${
                        index === 0
                          ? "text-2xl sm:text-4xl"
                          : "text-xl sm:text-2xl"
                      }`}
                    >
                      {study.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-background/70 leading-relaxed max-w-xl">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6">
                      {study.metrics.slice(0, 3).map((metric, i) => (
                        <div key={i}>
                          <div className="text-lg sm:text-xl font-bold">
                            {metric.value}
                          </div>

                          <div className="text-[11px] sm:text-xs text-background/60">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View Link */}
                    <div className="mt-5 sm:mt-6 flex items-center gap-2 text-sm font-medium">
                      <span>View Case Study</span>

                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}