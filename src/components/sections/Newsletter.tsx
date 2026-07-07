"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/8 bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-10 md:flex-row md:items-center">
      <div>
        <h3 className="font-display text-2xl font-medium text-mist-100">
          Growth ideas, monthly.
        </h3>
        <p className="mt-2 max-w-sm text-sm text-mist-500">
          Subscribe for practical marketing insights — no spam, unsubscribe
          anytime.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md items-center gap-2"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-full border border-white/10 bg-ink-800 px-5 py-3 text-sm text-mist-100 placeholder:text-mist-700 focus:border-signal focus:outline-none"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal text-white transition-colors hover:bg-signal-light"
          aria-label="Subscribe"
        >
          {submitted ? <Check size={18} /> : <ArrowRight size={18} />}
        </motion.button>
      </form>
    </div>
  );
}
