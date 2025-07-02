"use client";

import AnimatedCard from "@/components/atom/AnimatedCard";
import InteractiveBackground from "@/components/atom/InteractiveBackground";
import { Target, Eye, Award } from "lucide-react";

const cardData = [
  {
    title: "Our Mission",
    description:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.",
    icon: Target,
    bgColor: "bg-blue-100",
    iconColor: "text-[#024FF0]",
    delay: 0,
  },
  {
    title: "Our Vision",
    description:
      "To be the leading technology partner that transforms how businesses operate, innovate, and succeed in the digital age through intelligent solutions and strategic guidance.",
    icon: Eye,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    delay: 0.2,
  },
  {
    title: "Our Values",
    description:
      "Excellence, integrity, innovation, and collaboration form the foundation of everything we do. We believe in building lasting partnerships based on trust and results.",
    icon: Award,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    delay: 0.4,
  },
];

const MissionVision = () => {
  return (
    <section className="relative py-20 bg-[#E5E5E5] overflow-hidden">
      <InteractiveBackground />
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cardData.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimatedCard key={index} delay={card.delay}>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                  <div
                    className={`w-16 h-16 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className={`h-8 w-8 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="opacity-70">{card.description}</p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
