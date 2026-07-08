"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Industries we serve"
        title="Built for the businesses that shape the UK high street and beyond"
        align="center"
        className="mx-auto"
      />
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {industries.map((ind, i) => (
          <motion.span
            key={ind}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-full border border-mist-100/10 bg-ink-800/50 px-5 py-2.5 text-sm text-mist-300 transition-colors hover:border-signal/40 hover:text-mist-100"
          >
            {ind}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
