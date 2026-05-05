import type { Metadata } from "next";
import { AboutSection } from "../components/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Amber's Cleaning Service, LLC has delivered dependable commercial cleaning with care since 2018.",
};

export default function AboutPage() {
  return <AboutSection />;
}
