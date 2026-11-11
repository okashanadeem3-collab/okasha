import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";

export function Stats() {
  return (
    <section className="border-y border-mist-100/5 bg-gradient-to-b from-mist-100/[0.02] to-transparent">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="font-display text-3xl font-medium text-mist-100 sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-mist-700">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
