"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Our process"
        title="How we work with UK businesses"
        description="A clear, six-stage path from first conversation to ongoing growth — so you always know what's next."
        align="center"
        className="mx-auto"
      />

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-mist-100/8 lg:block" />
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl border border-mist-100/8 bg-ink-800/50 p-7 ${
                i % 2 === 0 ? "lg:mr-6" : "lg:ml-6 lg:mt-16"
              }`}
            >
              <span className="font-display text-sm text-signal-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-mist-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
