"use client";

import { motion } from "framer-motion";

const OurPhilosophy = () => {
  const timelineSteps = [
    {
      title: "Discovery & Planning",
      description:
        "We begin with a deep understanding of your unique challenges, goals, and constraints. Our team analyzes your business objectives to develop tailored strategies.",
      phase: "Phase 1",
    },
    {
      title: "Design & Prototyping",
      description:
        "User-centered design principles guide our creative process. We create prototypes and wireframes that prioritize real user needs and intuitive experiences.",
      phase: "Phase 2",
    },
    {
      title: "Agile Development",
      description:
        "Our agile methodology ensures rapid delivery without compromising quality. We maintain transparent communication and iterative development cycles.",
      phase: "Phase 3",
    },
    {
      title: "Testing & Optimization",
      description:
        "Rigorous testing and continuous optimization ensure your solution performs flawlessly. We prioritize sustainable technology and ethical innovation.",
      phase: "Phase 4",
    },
    {
      title: "Deployment & Support",
      description:
        "From ideation to deployment, we provide ongoing support and optimization to ensure your solution continues to meet evolving business needs.",
      phase: "Phase 5",
    },
  ];

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 md:px-20 py-32 text-[#eaeaea] bg-[#252525] rounded-md text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[18px] font-mono">
            We believe in building with purpose. Our approach is rooted in agile
            development, user-centered design, and ethical innovation. From
            ideation to deployment, we prioritize real user needs, transparent
            collaboration, and sustainable technology.
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Our Approach
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative">
                <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-300 relative pl-8 after:left-3 space-y-8">
                  {timelineSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute left-0 w-6 h-6 bg-[#024FF0] rounded-full -translate-x-[35px] z-10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="text-sm text-[#024FF0] font-medium mb-1">
                          {step.phase}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {step.title}
                        </h3>
                        <p className="opacity-70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                <h4 className="text-xl font-semibold mb-4">Why This Matters</h4>
                <ul className="space-y-3 ">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#024FF0] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Faster time-to-market for your solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#024FF0] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reduced risk through iterative development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#024FF0] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Better alignment with business objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#024FF0] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ongoing support and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPhilosophy;
