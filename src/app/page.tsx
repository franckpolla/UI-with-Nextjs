import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Camp from "@/components/Camp";

export default function Home() {
  return (
    <div>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </div>
  );
}
