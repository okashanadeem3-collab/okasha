import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ServiceDetails } from "./service-details";
import { Technologies } from "@/components/sections/Technologies";
import { Pricing } from "@/components/sections/Pricing";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, SEO, PPC, branding, social media marketing, graphic design, UI/UX, and mobile app development for UK businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-40 sm:pt-48">
        <SectionHeading
          eyebrow="Services"
          title="Everything your brand needs to grow online"
          description="Nine core disciplines, one accountable team — from first pixel to first sale."
        />
      </section>

      <ServicesOverview />
      <ServiceDetails />
      <Technologies />
      <Pricing />
      <ContactCTA />
    </>
  );
}
