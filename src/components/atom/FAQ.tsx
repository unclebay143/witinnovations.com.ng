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
      "We implement rigorous testing protocols, code reviews, and quality assurance processes throughout development. Our team follows industry best practices and maintain high standards for all deliverables.",
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
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen mb-44">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto px-4">
            Discover answers to common questions about our process and services
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 h-full rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse opacity-50"></div>
          </div>
          <div className="space-y-8 md:space-y-16">
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
                  className="relative flex items-center justify-start md:justify-start md:even:justify-end"
                >
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 md:border-4 border-white shadow-lg transition-all duration-700 ${
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
                  <div
                    className={`w-full md:w-5/12 transition-all duration-700 transform ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : `translate-x-8 md:translate-x-0 ${
                            isLeft ? "md:-translate-x-8" : "md:translate-x-8"
                          } translate-y-4 opacity-0`
                    }`}
                  >
                    <div
                      className={`relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 ml-16 md:ml-0 ${
                        isLeft ? "md:mr-8" : "md:ml-8"
                      } group hover:scale-105`}
                    >
                      <div
                        className={`absolute top-6 md:top-8 w-0 h-0 left-0 -translate-x-full border-r-[15px] md:border-r-[20px] border-r-white border-y-[8px] md:border-y-[10px] border-y-transparent ${
                          isLeft
                            ? "md:right-0 md:left-auto md:-translate-x-0 md:border-l-[20px] md:border-l-white md:border-r-0"
                            : "md:left-0 md:-translate-x-full md:border-r-[20px] md:border-r-white md:border-l-0"
                        }`}
                      ></div>
                      <div
                        className={`absolute w-fit -top-2 md:-top-3 right-4 ${
                          isLeft ? "md:right-4" : "md:left-4"
                        } bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full shadow-lg`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <h4 className="text-lg md:text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                          {faq.question}
                        </h4>
                        <p className="opacity-70 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full shadow-lg animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
