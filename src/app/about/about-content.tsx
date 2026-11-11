"use client";

import { motion } from "framer-motion";
import { Gem, Wallet, HeartHandshake, Clock4 } from "lucide-react";

const pillars = [
  {
    icon: Gem,
    title: "Creative Excellence",
    description: "Our team brings creativity and innovation to every project.",
  },
  {
    icon: Wallet,
    title: "Affordable Solutions",
    description: "High-quality services delivered at competitive prices.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    description:
      "Your satisfaction is our priority — we work closely with you at every step.",
  },
  {
    icon: Clock4,
    title: "Timely Delivery",
    description:
      "We respect your deadlines and deliver on time without compromising quality.",
  },
];

const team = [
  { name: "Okasha", role: "Founder & Creative Director" },
  { name: "Hamza", role: "Client Strategy" },
  { name: "Design Team", role: "Brand & Web" },
  { name: "Marketing Team", role: "SEO & Social" },
];

export function AboutContent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-mist-100/8 bg-ink-800/50 p-8"
          >
            <h3 className="font-display text-xl font-medium text-mist-100">
              Our mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              To help businesses establish a strong digital presence through
              expert branding, cutting-edge web solutions, and strategic
              marketing — turning ambition into measurable online growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-mist-100/8 bg-ink-800/50 p-8"
          >
            <h3 className="font-display text-xl font-medium text-mist-100">
              Our vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              To be the trusted growth partner for UK businesses of every
              size — combining creativity, strategy, and technology so every
              brand we work with can compete and win online.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-center font-display text-2xl font-medium text-mist-100 sm:text-3xl">
          Why choose Digitech Enterprises?
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-mist-100/8 bg-ink-800/40 p-6"
            >
              <p.icon size={22} className="text-signal-light" />
              <h4 className="mt-4 font-display text-base font-medium text-mist-100">
                {p.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-mist-500">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-center font-display text-2xl font-medium text-mist-100 sm:text-3xl">
          The people behind the work
        </h3>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-mist-100/8 bg-ink-800/40 p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-signal/40 to-ember/20 font-display text-lg font-medium text-mist-100">
                {member.name.charAt(0)}
              </div>
              <p className="mt-4 font-display text-sm font-medium text-mist-100">
                {member.name}
              </p>
              <p className="mt-1 text-xs text-mist-700">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
