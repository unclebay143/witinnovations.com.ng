import AdditionalServices from "@/components/molecules/services/AdditionalServices";
import MainServices from "@/components/molecules/services/MainServices";
import OurProcess from "@/components/molecules/services/OurProcess";
import SectionHero from "@/components/molecules/services/ServiceHero";

export default function Page() {
  return (
    <main>
      <SectionHero />
      <MainServices />
      <AdditionalServices />
      <OurProcess />
    </main>
  );
}
