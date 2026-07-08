"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-mist-100/8 bg-mesh-1 px-8 py-16 text-center sm:px-16"
      >
        <div className="absolute inset-0 bg-ink-900/40" />
        <div className="relative">
          <h2 className="balance mx-auto max-w-2xl font-display text-3xl font-medium text-mist-100 sm:text-4xl">
            Let&apos;s talk business. But you first.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-mist-500">
            Tell us about your goals and we&apos;ll come back with a plan built
            around them — no pressure, no jargon.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href={company.phoneHref} variant="ghost" icon={false} external>
              Call {company.phone}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
