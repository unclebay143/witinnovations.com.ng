"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section id="about" className="py-32 px-6 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Who We Are
        </h2>

        <TypeAnimation
          sequence={[
            "WIT Innovations LTD is a digital technology company focused on building future-ready solutions through software, AI training, and consulting. Our mission is to empower people and businesses with intelligent, human-centered systems.",
          ]}
          speed={50}
          cursor={false}
          wrapper="p"
          className="text-lg opacity-70"
        />
      </motion.div>
    </section>
  );
};

export default Intro;
