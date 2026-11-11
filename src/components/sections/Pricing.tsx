"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing, company } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Pricing"
        title="Digital marketing packages designed for every business"
        description="Transparent tiers for website development — flexible SEO and social media plans are available on request."
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pricing.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "relative flex flex-col rounded-3xl border p-8",
              tier.popular
                ? "border-signal/50 bg-gradient-to-b from-signal/10 to-transparent shadow-glow"
                : "border-mist-100/8 bg-ink-800/50"
            )}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-8 rounded-full bg-signal px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                Most popular
              </span>
            )}
            <p className="text-xs uppercase tracking-[0.2em] text-mist-700">
              {tier.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium text-mist-100">
              {tier.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold text-mist-100">
                {tier.price}
              </span>
              <span className="text-sm text-mist-700 line-through">
                {tier.originalPrice}
              </span>
            </div>
            <p className="mt-1 text-xs text-mist-700">{tier.note}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-mist-500">
                  <Check size={15} className="mt-0.5 shrink-0 text-signal-light" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={`https://api.whatsapp.com/send/?phone=442086388301&text=Interested+in+${encodeURIComponent(
                tier.name
              )}+package.`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-8 block rounded-full py-3 text-center text-sm font-medium transition-colors",
                tier.popular
                  ? "bg-signal text-white hover:bg-signal-light"
                  : "glass text-mist-100 hover:border-mist-100/20"
              )}
            >
              Get started
            </a>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-mist-700">
        Custom SEO and social media marketing plans available — call{" "}
        <a href={company.phoneHref} className="text-signal-light">
          {company.phone}
        </a>{" "}
        for a tailored quote.
      </p>
    </section>
  );
}
