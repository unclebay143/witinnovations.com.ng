import Testimonials from "@/components/atom/Testimonials";
import { ProjectHero } from "@/components/molecules/past-projects/ProjectHero";
import { Projects } from "@/components/molecules/past-projects/Projects";
import { ProjectsMetrics } from "@/components/molecules/past-projects/ProjectsMetrics";
import { Technologies } from "@/components/molecules/past-projects/Technologies";
import React from "react";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <ProjectHero />
      <Projects />
      <ProjectsMetrics />
      <Technologies />
      <Testimonials />
    </main>
  );
}
