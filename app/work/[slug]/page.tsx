import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { CTASection } from "@/components/sections/cta-section";
import Image from "next/image";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/work" className="text-background/60 hover:text-background transition-colors">
                  Work
                </Link>
              </li>
              <li className="text-background/40">/</li>
              <li className="text-background">{study.client}</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {study.category.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs backdrop-blur-sm"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              {study.title}
            </h1>
            <p className="mt-6 text-xl text-background/70 leading-relaxed">
              {study.description}
            </p>

            {/* Metrics */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-background/10 pt-12">
              {study.metrics.map((metric, i) => (
                <div key={i}>
                  <div className="text-xl font-bold sm:text-4xl">{metric.value}</div>
                  <div className="mt-1 text-sm text-background/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Visual */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-foreground shadow-2xl group">

            {/* Wrap the content in an anchor tag */}
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full relative"
            >
              {study.thumbnail ? (
                <>
                  <Image
                    src={study.thumbnail}
                    alt={`${study.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500"
                    priority
                  />
                  {/* Added a hover overlay to signal clickability */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/20 transition-colors duration-300" />
                </>
              ) : (
                <div className="absolute inset-0 bg-muted flex items-center justify-center" />
              )}

              {/* Content Layer */}
              <div className="relative h-full w-full flex items-center justify-center z-10">
                <div className="text-center text-white">
                  {!study.thumbnail ? (
                    <svg className="h-24 w-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    /* Optional: Add a "Visit Live Site" hint that appears on hover */
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/40">
                      Visit Live Site
                    </div>
                  )}
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Client
                  </h3>
                  <p className="mt-2 font-semibold">{study.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Services
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {study.category.map((cat) => (
                      <span key={cat} className="text-sm">{cat}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Results
                  </h3>
                  <div className="mt-2 space-y-2">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  The Challenge
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Our Solution
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  The Results
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {study.results}
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid gap-6 sm:grid-cols-3">
                {study.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-muted/30 p-6 text-center"
                  >
                    <div className="text-3xl font-bold">{metric.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Previous Project */}
            <Link
              href={`/work/${prevStudy.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-background p-6 transition-all hover:border-foreground/20 hover:shadow-md"
            >
              <svg className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <div>
                <p className="text-sm text-muted-foreground">Previous</p>
                <p className="font-semibold">{prevStudy.title}</p>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              href={`/work/${nextStudy.slug}`}
              className="group flex items-center justify-end gap-4 rounded-xl border border-border bg-background p-6 transition-all hover:border-foreground/20 hover:shadow-md text-right"
            >
              <div>
                <p className="text-sm text-muted-foreground">Next</p>
                <p className="font-semibold">{nextStudy.title}</p>
              </div>
              <svg className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
