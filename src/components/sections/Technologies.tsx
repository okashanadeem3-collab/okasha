import { technologies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Technologies() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Our stack"
        title="Technologies we use to build and grow"
        align="center"
        className="mx-auto"
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="rounded-xl border border-mist-100/8 bg-ink-800/40 px-4 py-5 text-center text-sm font-medium text-mist-300 transition-colors hover:border-signal/40 hover:text-mist-100"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
