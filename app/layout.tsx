import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { FooterSection } from "./components/FooterSection";
import { Header } from "./components/Header";
import "./globals.css";

const siteUrl = "https://amberscleaningservicellc.com";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Commercial office and facility cleaning from Amber's Cleaning Service, LLC. Insured, dependable crews serving businesses since 2018.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amber's Cleaning Service, LLC | Commercial Cleaning You Can Trust",
    template: "%s | Amber's Cleaning Service, LLC",
  },
  description: siteDescription,
  keywords: [
    "commercial cleaning",
    "office cleaning",
    "Amber's Cleaning Service",
    "Illinois cleaning company",
    "professional cleaners",
  ],
  openGraph: {
    title: "Amber's Cleaning Service, LLC | Commercial Cleaning",
    description: siteDescription,
    url: siteUrl,
    siteName: "Amber's Cleaning Service, LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amber's Cleaning Service, LLC",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="font-sans min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-full bg-brand-charcoal px-4 py-2 text-sm font-semibold text-white opacity-0 transition focus:translate-y-0 focus:bg-brand-teal focus:text-white focus:opacity-100 focus:outline-none"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-[50vh]">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
