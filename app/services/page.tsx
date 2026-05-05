import type { Metadata } from "next";
import { SectionTreeDivider } from "../components/SectionTreeDivider";
import { ServicesSection } from "../components/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial cleaning services including offices, facilities, Move-In and Move-Out, post construction cleanup, and custom plans from Amber's Cleaning Service, LLC.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <SectionTreeDivider flip />
    </>
  );
}
