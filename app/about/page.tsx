import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { teamMembers, values, stats } from "@/lib/data";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our agency, our team, and our mission to help ambitious brands achieve extraordinary growth through digital excellence.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-background/60">
              About Us
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Driven by Innovation, Guided by Results
            </h1>
            <p className="mt-6 text-lg text-background/70 leading-relaxed text-pretty">
              We are a team of strategists, designers, developers, and marketers united 
              by a single mission: to help ambitious brands achieve extraordinary growth.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Visual Side */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-8xl font-bold text-foreground/10">2026</span>
                    <p className="mt-2 text-muted-foreground">Founded</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4 max-w-xs">
                {stats.slice(0, 2).map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-background p-4 shadow-lg text-center"
                  >
                    <div className="text-2xl font-bold">{stat.value}{stat.suffix}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2026, our agency began with a simple belief: that great marketing 
                  should be both creative and measurable. What started as a small team of 
                  passionate digital enthusiasts has grown into a full-service agency trusted 
                  by brands across industries.
                </p>
                <p>
                  Over the past 1 year, we have partnered with over 10 clients, delivered 
                  25+ successful projects, and generated great revenue for our partners. 
                  But numbers only tell part of the story.
                </p>
                <p>
                  What truly defines us is our commitment to understanding each client{"'"}s unique 
                  challenges and crafting solutions that drive real business impact. We do not 
                  just execute campaigns; we build partnerships that last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              These core principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-border bg-background p-8"
              >
                {/* Number */}
                <span className="absolute right-4 top-4 text-6xl font-bold text-muted/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Our Team
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Meet the Experts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A diverse team of specialists united by passion and expertise.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
              >
                {/* Avatar Placeholder */}
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground/30">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Us CTA */}
          <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 text-center lg:p-12">
            <h3 className="text-2xl font-bold">Join Our Team</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {`We're`} always looking for talented individuals who share our passion for 
              digital excellence. Check out our open positions and become part of something great.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/careers">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      {/* <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-background/60">
              Recognition
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Awards & Accolades
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { year: "2025", award: "Best Digital Agency", org: "Marketing Awards" },
              { year: "2024", award: "Top 10 Performance Agency", org: "AdWeek" },
              { year: "2024", award: "Excellence in Innovation", org: "Tech Awards" },
              { year: "2025", award: "Best Brand Campaign", org: "Creative Circle" },
            ].map((award, index) => (
              <div
                key={index}
                className="rounded-2xl border border-background/10 bg-background/5 p-6 text-center backdrop-blur-sm"
              >
                <span className="text-sm text-background/60">{award.year}</span>
                <h3 className="mt-2 font-semibold">{award.award}</h3>
                <p className="mt-1 text-sm text-background/70">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CTASection />
    </>
  );
}
