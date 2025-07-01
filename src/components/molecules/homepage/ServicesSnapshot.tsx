"use client";

import Link from "next/link";

const services = [
  {
    title: "Software Development",
    description: "Web and mobile apps tailored to your business goals.",
    link: "/services",
  },
  {
    title: "AI Training & Education",
    description: "Empowering individuals and institutions with AI knowledge.",
    link: "/services",
  },
  {
    title: "Technology Consulting",
    description: "Guiding strategy, architecture, and implementation.",
    link: "/services",
  },
];

const borderColors = [
  "border-[#745296]",
  "border-[#00A9A5]",
  "border-[#003049]",
];

const ServicesSnapshot = () => {
  return (
    <section className="py-32 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-6 shadow-sm rounded-lg text-left borde border-[0.5px] transition ${
                borderColors[idx % borderColors.length]
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-4 opacity-70">{service.description}</p>
              <Link
                href={service.link}
                className="text-primary hover:underline font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
