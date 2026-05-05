import { HeroSection } from "./components/HeroSection";
import { SectionTreeDivider } from "./components/SectionTreeDivider";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustBarSection } from "./components/TrustBarSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <SectionTreeDivider />
      <TestimonialsSection />
    </>
  );
}
