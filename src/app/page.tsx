import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { EngineeringIdentity } from "@/components/engineering-identity";
import { SystemsGrid } from "@/components/systems-grid";
import { EngineeringDNA } from "@/components/engineering-dna";
import { EngineeringLab } from "@/components/engineering-lab";
import { Journey } from "@/components/journey";
import { BeyondBuilding } from "@/components/beyond-building";
import { CurrentlyBuilding } from "@/components/currently-building";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 text-white selection:bg-electric-blue selection:text-white">
      <Navigation />
      <Hero />
      <EngineeringIdentity />
      <SystemsGrid />
      <EngineeringDNA />
      <EngineeringLab />
      <Journey />
      <BeyondBuilding />
      <CurrentlyBuilding />
      <Contact />
      <Footer />
    </main>
  );
}
