import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Digitec Enterprise's portfolio of web design, branding, and digital marketing projects for UK businesses.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-40 sm:pt-48">
        <SectionHeading
          eyebrow="Portfolio"
          title="Work we're proud to put our name on"
          description="A selection of recent websites, brand identities, and campaigns built for real UK businesses."
        />
      </section>

      <Portfolio showHeading={false} />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
