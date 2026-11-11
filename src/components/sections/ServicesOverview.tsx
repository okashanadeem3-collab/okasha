"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesOverview({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="What we offer"
          title="Professional marketing services, built to grow your business"
          description="Our team of developers, designers, and strategists works with you at every step toward measurable digital growth."
        />
        <Link
          href="/services"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-mist-300 hover:text-mist-100 sm:flex"
        >
          All services <ArrowUpRight size={16} />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {list.map((service) => {
          const Icon = (Icons as any)[service.icon] ?? Icons.Sparkles;
          return (
            <motion.div key={service.slug} variants={item}>
              <Link
                href={`/services#${service.slug}`}
                id={service.slug}
                className="group relative block h-full overflow-hidden rounded-2xl border border-mist-100/8 bg-ink-800/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-glow"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-signal/0 blur-2xl transition-all duration-500 group-hover:bg-signal/20" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-mist-100/5 text-signal-light transition-colors group-hover:bg-signal group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="relative mt-6 font-display text-lg font-medium text-mist-100">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-mist-500">
                  {service.short}
                </p>
                <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-signal-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more <ArrowUpRight size={14} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
