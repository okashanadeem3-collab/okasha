"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function ServiceDetails() {
  return (
    <section className="mx-auto max-w-7xl divide-y divide-white/5 px-6 py-16">
      {services.map((service, i) => {
        const Icon = (Icons as any)[service.icon] ?? Icons.Sparkles;
        const reverse = i % 2 === 1;
        return (
          <div
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-28 grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, x: reverse ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55 }}
              className={reverse ? "lg:order-2" : ""}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/15 text-signal-light">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium text-mist-100 sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mist-500">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist-300">
                    <Check size={15} className="mt-0.5 shrink-0 text-signal-light" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact">Discuss this service</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55 }}
              className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-signal/15 via-ink-800 to-ember/10 ${
                reverse ? "lg:order-1" : ""
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon size={72} className="text-mist-100/10" />
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
