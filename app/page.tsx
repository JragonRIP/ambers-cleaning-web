import { HeroSection } from "./components/HeroSection";
import { NoContractBanner } from "./components/NoContractBanner";
import { SectionTreeDivider } from "./components/SectionTreeDivider";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustBarSection } from "./components/TrustBarSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NoContractBanner />
      <TrustBarSection />
      <SectionTreeDivider />
      <TestimonialsSection />
    </>
  );
}
