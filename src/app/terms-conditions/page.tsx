import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-40 sm:pt-48">
      <h1 className="font-display text-3xl font-medium text-mist-100">
        Terms &amp; Conditions
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-mist-500">
        This is placeholder copy. Replace with your full terms of service
        covering payment terms, project scope, revisions, and liability
        before {company.name} launches this site.
      </p>
    </section>
  );
}
