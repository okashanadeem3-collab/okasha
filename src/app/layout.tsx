import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { company } from "@/lib/data";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://www.digitecenterprise.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Digitech Enterprises Ltd — UK Digital Marketing & Web Development Agency",
    template: "%s | Digitech Enterprises Ltd",
  },
  description:
    "Digitech Enterprises Ltd is a UK digital marketing agency helping businesses grow online through web development, SEO, PPC, branding, and social media marketing.",
  keywords: [
    "digital marketing agency UK",
    "web development UK",
    "SEO services UK",
    "branding agency",
    "social media marketing agency",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: company.name,
    title: "Digitech Enterprises Ltd — UK Digital Marketing & Web Development Agency",
    description:
      "Results-driven SEO, PPC, branding, and web development for UK businesses.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitech Enterprises Ltd — UK Digital Marketing Agency",
    description:
      "Results-driven SEO, PPC, branding, and web development for UK businesses.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  image: `${siteUrl}/og-image.png`,
  url: siteUrl,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 688, 58 Peregrine Road, Hainault",
    addressLocality: "Ilford",
    addressRegion: "Essex",
    postalCode: "IG6 3SZ",
    addressCountry: "GB",
  },
  sameAs: [
    company.social.facebook,
    company.social.twitter,
    company.social.instagram,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <LoadingScreen />
        <ScrollProgress />
        <div className="grain-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
