import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background sm:px-16 lg:px-24 lg:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          {/* Gradient Accents */}
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-background/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-background/5 blur-2xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mt-6 text-lg text-background/70 leading-relaxed text-pretty">
              {`Let's discuss how we can help you achieve your business goals through strategic 
              digital marketing and innovative design.`}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="min-w-[180px]">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="ghost" 
                className="text-background hover:text-background hover:bg-background/10 min-w-[180px]"
              >
                <Link href="/work">Explore Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
