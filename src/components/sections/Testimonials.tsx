"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Client feedback"
        title="What our customers say about Digitec"
        align="center"
        className="mx-auto"
      />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative mt-14 mx-auto max-w-2xl"
      >
        <Quote className="mx-auto mb-6 text-signal/30" size={40} />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-ember text-ember" />
              ))}
            </div>
            <p className="balance mt-5 font-display text-xl font-medium leading-relaxed text-mist-100 sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm font-medium text-mist-100">{t.name}</p>
            <p className="text-xs text-mist-700">{t.role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() =>
              setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-500 transition-colors hover:border-signal hover:text-signal-light"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-signal" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-500 transition-colors hover:border-signal hover:text-signal-light"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
