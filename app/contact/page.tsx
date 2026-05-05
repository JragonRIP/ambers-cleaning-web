import type { Metadata } from "next";
import { ContactReachSection } from "../components/ContactReachSection";
import { QuoteSection } from "../components/QuoteSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, text, or request a quote from Amber's Cleaning Service, LLC. Commercial cleaning with a personal touch.",
};

export default function ContactPage() {
  return (
    <>
      <ContactReachSection />
      <QuoteSection />
    </>
  );
}
