"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const StorySection = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Rvcnl8ZW58MHx8MHx8fDA%3D')", // Replace with your preferred image
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-0" />

      <motion.div
        className="z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow">
          Our Story
        </h2>
        <p className="text-white text-lg md:text-xl mb-6 leading-relaxed drop-shadow-sm">
          WIT Innovations started as <strong>Walk-In Tech</strong>, a
          passion-driven idea to bridge the digital divide through accessible
          technology and community empowerment. Over time, it matured into{" "}
          <strong>WIT Innovations Limited</strong>, a registered company
          committed to building intelligent, human-centered, and scalable
          digital products that solve real problems and shape the future.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-[#745296] hover:bg-[#5b3c78] text-white font-medium  shadow-md transition duration-300 ease-in-out"
        >
          Learn More About Us
        </Link>
      </motion.div>
    </section>
  );
};

export default StorySection;
