import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { company, services } from "@/lib/data";
import { Newsletter } from "@/components/sections/Newsletter";

export function Footer() {
  return (
    <footer className="relative border-t border-[#F5F1E6]/10 bg-[#17140D]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Newsletter />

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-[#F5F1E6]/10 pt-16 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember font-display text-sm font-semibold text-[#17140D]">
                DE
              </span>
              <span className="font-display text-base font-medium text-[#F5F1E6]">
                Digitech Enterprises
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B3A98C]">
              We have the strategy and tools to transform your vision into a
              digital presence that performs.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5F1E6]/15 text-[#B3A98C] transition-colors hover:border-ember hover:text-ember-light"
              >
                <Facebook size={16} />
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5F1E6]/15 text-[#B3A98C] transition-colors hover:border-ember hover:text-ember-light"
              >
                <Twitter size={16} />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5F1E6]/15 text-[#B3A98C] transition-colors hover:border-ember hover:text-ember-light"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-medium text-[#F5F1E6]">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-[#B3A98C] transition-colors hover:text-[#F5F1E6]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-medium text-[#F5F1E6]">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
                { href: "/#faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#B3A98C] transition-colors hover:text-[#F5F1E6]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-medium text-[#F5F1E6]">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[#B3A98C]">
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0 text-ember-light" />
                <a href={company.phoneHref} className="hover:text-[#F5F1E6]">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 shrink-0 text-ember-light" />
                <a href={`mailto:${company.email}`} className="hover:text-[#F5F1E6]">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-ember-light" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#F5F1E6]/10 pt-8 text-xs text-[#7A7160] md:flex-row">
          <p>© {new Date().getFullYear()} Digitech Enterprises Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#B3A98C]">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-[#B3A98C]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
