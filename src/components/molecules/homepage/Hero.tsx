"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ParticleField from "@/components/atom/ParticleField";
import Hero3D from "@/components/atom/Hero3D";
import { Button } from "@/components/ui/button";

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
    <section className="relative h-[80vh] bg-gradient-to-br from-[#252525] via-[#024FF0] to-[#252525] text-white overflow-hidden">
      <Hero3D />

      <div className="absolute inset-0 bg-[#252525] z-0" />

      <div className="relative max-w-6xl mx-auto px-4 z-10 h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {messages[index].heading}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {messages[index].subtext}
            </p>
            <Link href="/services">
              <Button className="mt-4 bg-[#024FF0] hover:bg-[#0285f0] text-white">
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <ParticleField />
    </section>
  );
};

export default Hero;
