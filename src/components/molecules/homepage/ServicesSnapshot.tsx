"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Software Development",
    description: "Web and mobile apps tailored to your business goals.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751465226/software_i7tx90.jpg",
  },
  {
    name: "AI Training & Education",
    description: "Empowering individuals and institutions with AI knowledge.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751465226/ai-training_vo33xz.jpg",
  },
  {
    name: "Technology Consulting",
    description: "Guiding strategy, architecture, and implementation.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751465226/aaa_q0slnr.jpg",
  },
  {
    name: "Cloud & Infrastructure",
    description: "Scalable and secure infrastructure to support your growth.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751465996/cloud_ma9xtg.png",
  },
  {
    name: "Digital Transformation",
    description: "Modernizing processes with digital-first solutions.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751467969/dig_prcfp3.jpg",
  },
  {
    name: "AI-Powered Automation",
    description: "Streamlining operations with intelligent automation.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751465996/ai-power_suyi0a.jpg",
  },
];

export default function ServicesSnapshot() {
  const [hovered, setHovered] = useState<number>(0);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl text-primary font-bold mb-2">What We Offer</h2>
        <p className="mb-8">
          From strategy to execution, we help you thrive with transformative
          technology solutions.
        </p>
        <div className="flex gap-3 justify-start items-center overflow-x-auto flex-nowrap scrollbar-hide sm:justify-center ">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(0)}
              className={`relative flex-shrink-0 h-[400px] transition-all duration-300 ease-in-out overflow-hidden rounded-2xl cursor-pointer ${
                hovered === index ? "w-[300px]" : "w-[110px] brightness-75"
              }`}
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />

              {/* Always-visible gradient overlays */}
              <div className="absolute inset-0">
                {/* Light blue gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#cfe8ff] via-transparent to-transparent opacity-60 z-10" />

                {/* Black gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-black/10 to-transparent z-20" />
              </div>

              {/* Text content (shown only on hover) */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end z-30 text-white">
                <h3 className="text-lg font-bold">{service.name}</h3>
                {hovered === index && (
                  <p className="text-sm transition-opacity duration-300 opacity-100">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg text-[#024FF0] flex gap-1 items-center md:hidden">
          Scroll to view more <ArrowRight />
        </p>
      </div>
    </section>
  );
}
