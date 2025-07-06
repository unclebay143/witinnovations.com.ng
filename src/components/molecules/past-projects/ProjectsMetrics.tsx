"use client";
import { motion } from "framer-motion";

export const ProjectsMetrics = () => {
  const stats = [
    {
      value: "100%",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      label: "On-Time Delivery",
    },
    {
      value: "15+",
      color: "text-green-600",
      bgColor: "bg-green-600",
      label: "Projects Completed",
    },
    {
      value: "98%",
      color: "text-purple-600",
      bgColor: "bg-purple-600",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      color: "text-orange-600",
      bgColor: "bg-orange-600",
      label: "Support Available",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  } as const;

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
        ease: "backOut",
      },
    },
  } as const;

  return (
    <section className="py-20 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Project Success Metrics
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the success of our
            delivered projects.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute top-8 left-16 right-16 h-0.5 bg-gradient-to-r from-blue-300  via-green-300 to-orange-300 hidden md:block"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <div className="absolute top-6 left-0 right-0 hidden md:flex justify-between px-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`w-4 h-4 ${stat.bgColor} rounded-full border-4 border-white shadow-lg z-10`}
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="opacity-70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
