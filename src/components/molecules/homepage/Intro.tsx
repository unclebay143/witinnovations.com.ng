"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import VrLightAnimation from "@/components/atom/Vr-light-animation";

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
      <div className="relative  overflow-hidden">
        <section className=" flex flex-col md:flex-row justify-center items-center md:gap-16 mt-2  max-w-6xl mx-auto">
          <div className="w-full md:w-[60%] ">
            <VrLightAnimation />
          </div>
          <div>
            <h1 className="text-2xl md:w-[40%] text-left md:text-4xl font-bold text-primary mb-4">
              At WIT Innovations
            </h1>
            <p className="opacity-70 text-left max-w-2xl">
              we go beyond traditional IT services to deliver forward-thinking
              digital solutions. Our work spans custom software development,
              AI-powered education, and strategic technology consulting—all
              tailored to help organizations adapt, grow, and lead in an
              ever-evolving digital landscape. With a strong foundation in
              emerging technologies and user-centered design, we build tools and
              systems that are not only intelligent but also practical and
              scalable. Whether you're in healthcare, education, logistics, or
              beyond, our solutions are built to meet your challenges and fuel
              your success. We don&apos;t just solve problems—we collaborate
              with you to uncover new opportunities, ensuring every solution is
              secure, efficient, and aligned with your long-term goals.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Intro;
