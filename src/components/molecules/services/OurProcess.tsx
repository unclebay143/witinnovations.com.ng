"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start by understanding your business, challenges, and objectives.",
    color: "bg-blue-600",
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "We develop a comprehensive strategy tailored to your specific needs.",
    color: "bg-green-600",
  },
  {
    step: 3,
    title: "Implementation",
    description:
      "Our expert team executes the solution with precision and quality using the best technologies.",
    color: "bg-purple-600",
  },
  {
    step: 4,
    title: "Support",
    description:
      "We provide ongoing support and optimization to ensure continued success.",
    color: "bg-orange-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.5,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 80,
      damping: 12,
    },
  },
};

const circleVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 120,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      type: "spring" as const,
      stiffness: 300,
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 2.5,
      type: "tween" as const,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: 1.0,
    },
  },
};

const numberVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -90,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.3,
      duration: 0.4,
      type: "spring" as const,
      stiffness: 200,
    },
  },
};

const OurProcess = () => {
  return (
    <section className="py-20 md:mb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Our Process
          </h2>
          <div className="relative">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-600 via-purple-600 to-orange-600 transform -translate-y-1/2 origin-left"
              style={{ top: "200px" }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative"
            >
              {processSteps.map(
                ({ step, title, description, color }, index) => (
                  <motion.div
                    key={step}
                    variants={stepVariants}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="mb-8 md:mb-12">
                      <motion.h4
                        className="text-lg font-semibold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.8,
                        }}
                      >
                        {title}
                      </motion.h4>
                      <motion.p
                        className="opacity-70 text-sm max-w-xs"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 0.7, y: 0 }}
                        transition={{
                          delay: 0.7 + index * 0.8,
                          duration: 0.4,
                        }}
                      >
                        {description}
                      </motion.p>
                    </div>

                    <motion.div
                      variants={circleVariants}
                      whileHover="hover"
                      className={`w-16 h-16 ${color} text-white rounded-full flex items-center justify-center text-xl font-bold cursor-pointer shadow-lg relative z-10 border-4 border-white`}
                    >
                      <motion.span
                        variants={numberVariants}
                        className="font-bold"
                      >
                        {step}
                      </motion.span>
                    </motion.div>

                    {index < processSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        transition={{
                          delay: 1.2 + index * 0.8,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className={`md:hidden w-1 h-16 ${color} mt-4 origin-top`}
                      />
                    )}
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
