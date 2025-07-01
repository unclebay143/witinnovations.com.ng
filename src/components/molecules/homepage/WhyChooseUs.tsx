"use client";
import {
  Lightbulb,
  Users,
  ShieldCheck,
  Settings,
  Repeat,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Proven Expertise",
    text: "We bring deep experience in software, AI, and digital innovation.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client-Centric",
    text: "We build solutions around your needs, not templates.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovative Culture",
    text: "We love creating new, scalable ideas that make an impact.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "End-to-End Solutions",
    text: "We offer comprehensive solutions from ideation to deployment, ensuring smooth project execution.",
  },
  {
    icon: <Repeat className="w-8 h-8" />,
    title: "Agile Approach",
    text: "We embrace agile methodologies to quickly adapt to your evolving business needs.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Security First",
    text: "We prioritize security at every development stage to protect your data and systems.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center text-white bg-[#252525]"
      id="why"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why Choose WIT Innovations?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-left text-left px-4 bg-[#333131] p-6 rounded-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-70">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
