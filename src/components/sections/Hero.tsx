"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data";

const headline = "We build digital experiences that make businesses grow.";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const orbX = useTransform(sx, (v) => v * 30);
  const orbY = useTransform(sy, (v) => v * 30);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  const words = headline.split(" ");

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32"
    >
      {/* Mesh gradient + grid background */}
      <div className="absolute inset-0 bg-mesh-1" />
      <div className="absolute inset-0 bg-grid-fade bg-grid opacity-40" />

      {/* Floating orbs with mouse parallax */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-signal/20 blur-3xl animate-float-slow"
      />
      <motion.div
        style={{ x: useTransform(orbX, (v) => -v), y: useTransform(orbY, (v) => -v) }}
        className="absolute right-[15%] top-[45%] h-72 w-72 rounded-full bg-ember/10 blur-3xl animate-float-slower"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-signal-light"
        >
          <span className="h-px w-6 bg-signal-light" />
          {company.tagline}
        </motion.p>

        <h1 className="balance max-w-4xl font-display text-4xl font-medium leading-[1.05] text-mist-100 sm:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.15, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-mist-500 sm:text-lg"
        >
          From SEO and PPC to branding and web development — Digitech
          Enterprises designs strategies that deliver measurable growth, not
          just clicks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/contact">Start your project</Button>
          <Button href="/portfolio" variant="ghost">
            View our work
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist-700 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-mist-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
