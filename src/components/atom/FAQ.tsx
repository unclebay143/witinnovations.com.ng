"use client";

import { useEffect, useRef, useState } from "react";

const faqData = [
  {
    question: "How do you approach new projects?",
    answer:
      "We start with a comprehensive discovery phase to understand your business needs, followed by strategic planning, agile development, and ongoing support to ensure project success.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally and evolve with your business needs.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We implement rigorous testing protocols, code reviews, and quality assurance processes throughout development. Our team follows industry best practices and maintains high standards for all deliverables.",
  },
];

export const FAQ = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Discover answers to common questions about our process and services
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 h-full rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse opacity-50"></div>
          </div>

          <div className="space-y-16">
            {faqData.map((faq, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-700 ${
                        isVisible
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-110"
                          : "bg-gray-300 scale-100"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                          isVisible ? "animate-ping bg-blue-400 opacity-20" : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* FAQ Card */}
                  <div
                    className={`w-5/12 transition-all duration-700 transform ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : `${
                            isLeft ? "-translate-x-8" : "translate-x-8"
                          } translate-y-4 opacity-0`
                    }`}
                  >
                    <div
                      className={`relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                        isLeft ? "mr-8" : "ml-8"
                      } group hover:scale-105`}
                    >
                      {/* Arrow pointing to timeline */}
                      <div
                        className={`absolute top-8 w-0 h-0 ${
                          isLeft
                            ? "right-0 translate-x-full border-l-[20px] border-l-white border-y-[10px] border-y-transparent"
                            : "left-0 -translate-x-full border-r-[20px] border-r-white border-y-[10px] border-y-transparent"
                        }`}
                      ></div>

                      {/* Question Number */}
                      <div
                        className={`absolute -top-3 ${
                          isLeft ? "right-4" : "left-4"
                        } bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                          {faq.question}
                        </h4>
                        <p className="opacity-70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>

                      {/* Decorative gradient border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Timeline Cap */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full shadow-lg animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
