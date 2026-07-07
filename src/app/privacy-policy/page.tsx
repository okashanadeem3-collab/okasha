import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-40 sm:pt-48">
      <h1 className="font-display text-3xl font-medium text-mist-100">
        Privacy Policy
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-mist-500">
        This is placeholder copy. Replace with your full privacy policy
        covering what data {company.name} collects, how it is used, cookie
        policy, and how users can request data removal, before this site goes
        live.
      </p>
    </section>
  );
}
