"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    // NOTE: wire this up to your email/API provider (e.g. Resend, Formspree,
    // or a Next.js route handler at /api/contact) before going live.
    await new Promise((res) => setTimeout(res, 900));
    setStatus("sent");
    setForm(initialState);
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass flex flex-col items-center justify-center gap-4 rounded-3xl p-12 text-center"
      >
        <CheckCircle2 size={40} className="text-signal-light" />
        <h3 className="font-display text-xl font-medium text-mist-100">
          Message sent
        </h3>
        <p className="max-w-sm text-sm text-mist-500">
          Thanks for reaching out — our team will get back to you within one
          business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-signal-light hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const fields: {
    key: keyof FormState;
    label: string;
    type?: string;
    required?: boolean;
    span?: boolean;
  }[] = [
    { key: "name", label: "Full name", required: true },
    { key: "company", label: "Company" },
    { key: "email", label: "Email", type: "email", required: true },
    { key: "phone", label: "Phone", type: "tel" },
    { key: "subject", label: "Subject", span: true },
  ];

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.key} className={field.span ? "sm:col-span-2" : ""}>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-mist-700">
              {field.label} {field.required && <span className="text-signal-light">*</span>}
            </label>
            <input
              type={field.type ?? "text"}
              value={form[field.key]}
              onChange={(e) => update(field.key, e.target.value)}
              className="w-full rounded-xl border border-mist-100/10 bg-ink-800 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-700 focus:border-signal focus:outline-none"
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-mist-700">
            Message <span className="text-signal-light">*</span>
          </label>
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="w-full resize-none rounded-xl border border-mist-100/10 bg-ink-800 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-700 focus:border-signal focus:outline-none"
          />
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 text-sm text-red-600"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={status === "sending"}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-signal py-3.5 text-sm font-medium text-white transition-colors hover:bg-signal-light disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Sending..." : "Send message"}
        {status !== "sending" && <Send size={15} />}
      </motion.button>
    </form>
  );
}
