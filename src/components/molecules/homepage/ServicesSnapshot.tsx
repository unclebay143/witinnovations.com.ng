"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    name: "Software Development",
    description: "Web and mobile apps tailored to your business goals.",
    image:
      "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AI Training & Education",
    description: "Empowering individuals and institutions with AI knowledge.",
    image:
      "https://images.unsplash.com/photo-1716637644831-e046c73be197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFJfGVufDB8fDB8fHww",
  },
  {
    name: "Technology Consulting",
    description: "Guiding strategy, architecture, and implementation.",
    image:
      "https://images.unsplash.com/photo-1599453052061-5c377643e4fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Cloud & Infrastructure",
    description: "Scalable and secure infrastructure to support your growth.",
    image:
      "https://media.istockphoto.com/id/2148123501/photo/big-data-structure-blocks-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=v8jlOwEGSyIaWJJ1h2TM1bdfxh41odhF9XnMtk8WuyQ=",
  },
  {
    name: "Digital Transformation",
    description: "Modernizing processes with digital-first solutions.",
    image:
      "https://plus.unsplash.com/premium_photo-1683836722388-8643468c327d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "AI-Powered Automation",
    description: "Streamlining operations with intelligent automation.",
    image:
      "https://plus.unsplash.com/premium_photo-1683836722388-8643468c327d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D",
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
        <div className="flex gap-3 justify-start items-center overflow-x-auto flex-nowrap scrollbar-hide sm:justify-center">
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
                <div className="absolute inset-0 bg-black/60 text-white p-4 flex flex-col justify-end">
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
