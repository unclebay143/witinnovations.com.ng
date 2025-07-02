import AboutHero from "@/components/molecules/about/AboutHero";
import MissionVision from "@/components/molecules/about/MissionVision";
import OurPhilosophy from "@/components/molecules/about/OurPhilosophy";
import StorySection from "@/components/molecules/about/StorySection";

export default function Page() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <MissionVision />
      <OurPhilosophy />
      <div className="py-16 text-center opacity-10  font-bold">
        <p>TALK TO US ABOUT YOUR IDEA AND LETS US GET THE WORK DONE!</p>
        <p className="italic">WE CAN ALSO THINK FOR YOU...</p>
      </div>
    </main>
  );
}
