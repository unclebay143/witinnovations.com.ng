"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck } from "lucide-react";

const MissionVision = () => {
  return (
    <div className=" ">
      <section className="max-w-5xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center mt-32 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 text-primary mb-1" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="opacity-70">
              “To empower people and businesses with intelligent, ethical, and
              scalable digital solutions.”
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            <Lightbulb className="w-8 h-8 text-primary mb-1" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Vision
            </h2>
            <p className="opacity-70">
              “To be a catalyst for digital transformation across Africa and
              beyond.”
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MissionVision;
