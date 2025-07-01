"use client";
import { Lightbulb, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Proven Expertise",
    text: "We bring deep experience in software, AI, and digital innovation.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Client-Centric",
    text: "We build solutions around your needs, not templates.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Innovative Culture",
    text: "We love creating new, scalable ideas that make an impact.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 px-6 text-center" id="why">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Why Choose WIT Innovations?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 ">{feature.icon}</div>
              <h3 className="text-xl font-semibold text- mb-2">
                {feature.title}
              </h3>
              <p className="text- opacity-70">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
