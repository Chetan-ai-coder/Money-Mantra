import { clients } from "@/lib/data";

export function Clients() {
  // Double the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 lg:py-20 bg-background border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by industry leaders
        </p>
      </div>

      {/* Marquee Container */}
      <div className="mt-10 relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="mx-12 flex shrink-0 items-center justify-center"
            >
              <div className="flex h-12 items-center justify-center px-6 text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
