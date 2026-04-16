import Link from "next/link";
import { Button } from "@/components/ui/button";
import { values } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-foreground">
              {/* Geometric Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="h-20 w-20 rounded-lg bg-background/10 transition-all duration-500"
                      style={{
                        animationDelay: `${i * 100}ms`,
                        opacity: 0.2 + (i * 0.08),
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-background">
                  <span className="text-7xl font-bold lg:text-8xl">3+</span>
                  <p className="mt-2 text-lg text-background/70">Years of Excellence</p>
                </div>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-background p-6 shadow-lg max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium"
                    >
                      {["CP", "DP", "SR"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold">13+ Experts</p>
                  <p className="text-sm text-muted-foreground">Ready to help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Driven by Innovation, Guided by Results
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We are a team of strategists, designers, developers, and marketers united 
              by a single mission: to help ambitious brands achieve extraordinary growth 
              through digital excellence.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded in 2023, we have partnered with over 50 brands across industries, 
              delivering results that exceed expectations and building relationships that last.
            </p>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <svg className="h-3 w-3 text-background" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{value.title}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
