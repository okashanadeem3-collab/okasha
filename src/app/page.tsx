import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Industries } from "@/components/sections/Industries";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesOverview limit={6} />
      <Stats />
      <Process />
      <Portfolio limit={6} />
      <Testimonials />
      <Industries />
      <FAQ />
      <ContactCTA />
    </>
  );
}
