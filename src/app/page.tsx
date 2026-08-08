import Hero from "@/components/sections/Hero";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import SelectedWork from "@/components/sections/SelectedWork";
import Expertise from "@/components/sections/Expertise";
import Insights from "@/components/sections/Insights";
import BeyondWork from "@/components/sections/BeyondWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <About />
      <Experience />
      <SelectedWork />
      <Expertise />
      <Insights />
      <BeyondWork />
      <Contact />
    </>
  );
}
