"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface HeroMessage {
  heading: string;
  subtext: string;
  backgroundImage: string;
}

const messages: HeroMessage[] = [
  {
    heading: "Building Future-Focused Digital Solutions",
    subtext:
      "We deliver smart software, AI education, and consulting that powers progress.",
    backgroundImage:
      "https://media.istockphoto.com/id/2169036617/photo/ai-virtual-technology-hand-holding-global-network-connection-internet-communication-wireless.webp?a=1&b=1&s=612x612&w=0&k=20&c=1CkDg-gRGN_GW-WD1m6eyu0z6HAXaMLSBzl0yEhHRps=",
  },
  {
    heading: "Empowering Businesses with Intelligent Technology",
    subtext:
      "Partner with us to create scalable, human-centered digital systems.",
    backgroundImage:
      "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzfGVufDB8fDB8fHww",
  },
  {
    heading: "Innovation Starts Here",
    subtext:
      "We transform ideas into reality through modern tools and strategy.",
    backgroundImage:
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Hero = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center px-4 bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${messages[index].backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 bg-opacity-60 z-0" />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="max-w-3xl mx-auto z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {messages[index].heading}
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
            {messages[index].subtext}
          </p>
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-[#745296] hover:bg-[#523b69] text-white font-medium duration-300 ease-in-out transition"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
