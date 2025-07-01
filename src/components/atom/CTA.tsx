"use client";

import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative z-20 -mt-56 bg-[#745296] text-white py-12 px-6 md:px-20 shadow-xl  max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-snug">
            Interested in partnering with WIT Innovations?
          </h2>
          <p className="text-sm md:text-base text-white opacity-90">
            We are open to strategic collaborations that focus on innovation,
            people, and growth.
          </p>
        </div>
        <div>
          <Link
            href="/contact"
            className="bg-[#fefde5] text-[#523b69] hover:bg-amber-100 font-medium py-3 px-6 shadow transition"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
