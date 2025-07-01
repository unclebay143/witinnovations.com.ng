"use client";

import { motion } from "framer-motion";

const OurPhilosophy = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-20 py-32 text-[#eaeaea] bg-[#745296] text-center my-32 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold  mb-4">
          Our Philosophy
        </h2>
        <p className="text-[18px] font-mono">
          We believe in building with purpose. Our approach is rooted in agile
          development, user-centered design, and ethical innovation. From
          ideation to deployment, we prioritize real user needs, transparent
          collaboration, and sustainable technology.
        </p>
      </motion.div>
    </section>
  );
};

export default OurPhilosophy;
