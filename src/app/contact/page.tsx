import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Digitech Enterprises Ltd — call, email, or send a message to start your digital marketing project.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-40 sm:pt-48">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's talk business. But you first."
        description="Tell us about your project and we'll get back to you within one business day."
      />

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="rounded-3xl border border-mist-100/8 bg-ink-800/50 p-7">
            <h3 className="font-display text-base font-medium text-mist-100">
              Contact details
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-mist-500">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-signal-light" />
                <a href={company.phoneHref} className="hover:text-mist-100">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-signal-light" />
                <a href={`mailto:${company.email}`} className="hover:text-mist-100">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-signal-light" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-mist-100/8 bg-ink-800/50 p-7">
            <h3 className="flex items-center gap-2 font-display text-base font-medium text-mist-100">
              <Clock size={16} className="text-signal-light" /> Business hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-mist-500">
              {company.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className="text-mist-300">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-mist-100/8 bg-ink-800/50 p-7">
            <h3 className="font-display text-base font-medium text-mist-100">
              Follow us
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100/10 text-mist-500 hover:border-signal hover:text-signal-light"
              >
                <Facebook size={16} />
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100/10 text-mist-500 hover:border-signal hover:text-signal-light"
              >
                <Twitter size={16} />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100/10 text-mist-500 hover:border-signal hover:text-signal-light"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-mist-100/8">
            <iframe
              title="Digitech Enterprises office location"
              src="https://www.google.com/maps?q=58+Peregrine+Road+Hainault+Ilford+Essex+IG6+3SZ&output=embed"
              width="100%"
              height="220"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
