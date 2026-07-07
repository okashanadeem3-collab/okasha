import { clientLogos } from "@/lib/data";

export function TrustedBy() {
  const items = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-white/5 bg-ink-900/60 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-mist-700">
          Trusted by growing brands across the UK
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
        <div className="flex w-max animate-marquee gap-14">
          {items.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-lg font-medium text-mist-700 transition-colors hover:text-mist-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
