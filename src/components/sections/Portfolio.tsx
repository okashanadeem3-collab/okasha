"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { portfolio, portfolioCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PortfolioItem } from "@/types";

export function Portfolio({ limit, showHeading = true }: { limit?: number; showHeading?: boolean }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(() => {
    const list =
      active === "All"
        ? portfolio
        : portfolio.filter((p) => p.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      {showHeading && (
        <SectionHeading
          eyebrow="Selected work"
          title="We've transformed businesses like yours — you're next"
          description="A look at recent projects across web design, branding, and digital campaigns for UK businesses."
          align="center"
          className="mx-auto"
        />
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
              active === cat
                ? "border-signal bg-signal text-white"
                : "border-mist-100/10 text-mist-500 hover:border-mist-100/20 hover:text-mist-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((proj) => (
            <motion.button
              key={proj.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => setSelected(proj)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-mist-100/8 bg-ink-800 text-left"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-signal/25 via-ink-800 to-ember/10">
                <span className="font-display text-2xl font-medium text-mist-100/40">
                  {proj.title.charAt(0)}
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/95 via-ink/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-[0.2em] text-signal-light">
                  {proj.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-medium text-mist-100">
                  {proj.title}
                </h3>
              </div>
              <div className="absolute bottom-4 left-6 font-display text-lg font-medium text-mist-100 transition-opacity duration-300 group-hover:opacity-0">
                {proj.title}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-lg rounded-3xl p-8"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-5 top-5 text-mist-500 hover:text-mist-100"
              >
                <X size={20} />
              </button>
              <span className="text-[10px] uppercase tracking-[0.2em] text-signal-light">
                {selected.category}
              </span>
              <h3 className="mt-2 font-display text-2xl font-medium text-mist-100">
                {selected.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-500">
                {selected.description}
              </p>
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white hover:bg-signal-light"
              >
                Visit live site <ExternalLink size={15} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
