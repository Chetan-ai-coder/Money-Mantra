"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground text-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/50" />

      {/* Animated Accent Elements */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-2xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Tag */}
          {/* <div className="animate-fade-in-up opacity-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up opacity-0 delay-100">
            <span className="text-balance">
              We Build Brands That
              <span className="block mt-2 bg-gradient-to-r from-background via-background/80 to-background bg-clip-text">
                Dominate Digital
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-background/70 leading-relaxed sm:text-xl max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-200 text-pretty">
            Strategic digital marketing, stunning design, and cutting-edge technology. 
            We partner with ambitious brands to create experiences that convert.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-300">
            <Button asChild size="lg" variant="secondary" className="min-w-[180px]">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-background hover:text-background hover:bg-background/10 min-w-[180px]">
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 animate-fade-in-up opacity-0 delay-500">
            {[
              { value: "25+", label: "Projects" },
              { value: "10+", label: "Clients" },
              { value: "1+", label: "Years" },
              { value: "87%", label: "Retention" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-background/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
