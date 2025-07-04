"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowBigRight, ArrowRight } from "lucide-react";

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

export default function IndustriesSection() {
  const [hovered, setHovered] = useState<number>(0);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-left">
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
              {hovered === index && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0 text-white p-4 flex flex-col justify-end">
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-lg text-[#024FF0] flex gap-1 items-center">
          Scroll to view more <ArrowRight />
        </p>
      </div>
    </section>
  );
}
