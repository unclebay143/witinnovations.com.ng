"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#745296]">
          About Us
        </h1>
        <p className="opacity-80">
          Discover the story, vision, and people driving WIT Innovations.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
