import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stats } from "@/components/sections/Stats";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Digitec Enterprise is a UK digital marketing agency — innovators, problem solvers, and brand builders helping businesses grow online.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-40 sm:pt-48">
        <SectionHeading
          eyebrow="About us"
          title="Empowering brands in the digital world"
          description="At Digitec Enterprise, we're more than a design and development agency — we're innovators, problem solvers, and brand builders."
        />
      </section>

      <AboutContent />

      <TrustedBy />
      <Stats />
      <ContactCTA />
    </>
  );
}
