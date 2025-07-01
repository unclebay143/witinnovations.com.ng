"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    project: "Mobile App Development & Optimization for Online Supermarket",
    review:
      '"Since the launch, we\'ve had over 2,000 downloads with good ratings."',
    feedback:
      "Since the launch of the apps on the Google Play Store and Apple App Store, the client has seen 2,000 downloads and excellent customer reviews. The team is flexible and knowledgeable.",
    reviewer: "CEO, BringFresh",
    location: "Koeln, Germany",
    rating: 5,
    date: "Apr 29, 2022",
    budget: "$10,000 to $49,999",
    timeline: "Sep. 2021 - Ongoing",
    industry: "Retail",
    teamSize: "11-50 Employees",
  },
  {
    id: 2,
    project: "Mobile App Development & Optimization for Online Supermarket",
    review:
      '"Since the launch, we\'ve had over 2,000 downloads with good ratings."',
    feedback:
      "Since the launch of the apps on the Google Play Store and Apple App Store, the client has seen 2,000 downloads and excellent customer reviews. The team is flexible and knowledgeable.",
    reviewer: "CEO, BringFresh",
    location: "Koeln, Germany",
    rating: 5,
    date: "Apr 29, 2022",
    budget: "$10,000 to $49,999",
    timeline: "Sep. 2021 - Ongoing",
    industry: "Retail",
    teamSize: "11-50 Employees",
  },
  {
    id: 3,
    project: "Mobile App Development & Optimization for Online Supermarket",
    review:
      '"Since the launch, we\'ve had over 2,000 downloads with good ratings."',
    feedback:
      "Since the launch of the apps on the Google Play Store and Apple App Store, the client has seen 2,000 downloads and excellent customer reviews. The team is flexible and knowledgeable.",
    reviewer: "CEO, BringFresh",
    location: "Koeln, Germany",
    rating: 5,
    date: "Apr 29, 2022",
    budget: "$10,000 to $49,999",
    timeline: "Sep. 2021 - Ongoing",
    industry: "Retail",
    teamSize: "11-50 Employees",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-[#f9f9f9] px-6 py-16"
      id="testimonials"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        Client Testimonials
      </h2>

      <div className="relative w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1 text-left">
              <h3 className="text-xl font-semibold mb-2">
                {testimonials[index].project}
              </h3>
              <p className="italic text-gray-600 mb-4">
                {testimonials[index].review}
              </p>

              <div className="flex items-center mb-4">
                {Array.from({ length: testimonials[index].rating }).map(
                  (_, idx) => (
                    <Star
                      key={idx}
                      className="text-yellow-500 w-5 h-5"
                      fill="currentColor"
                    />
                  )
                )}
              </div>

              <p className="text-gray-700 mb-4">
                {testimonials[index].feedback}
              </p>

              <div className="flex flex-col text-gray-500 text-sm space-y-1">
                <span>
                  <strong>Reviewer:</strong> {testimonials[index].reviewer}
                </span>
                <span>
                  <strong>Location:</strong> {testimonials[index].location}
                </span>
                <span>
                  <strong>Industry:</strong> {testimonials[index].industry}
                </span>
                <span>
                  <strong>Team Size:</strong> {testimonials[index].teamSize}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                onClick={prev}
                className="mb-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
