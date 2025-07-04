"use client";

import { useEffect, useState } from "react";

const StorySection = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center  md:mb-12 mb-4 px-4 md:px-0">
            Our Story
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12  ">
            <div className="flex-1 flex justify-center w-full">
              <div
                className="relative w-full h-[50vh] min-h-[400px] bg-gradient-to-b from-slate-50 to-slate-100 md:rounded-lg overflow-visible md:overflow-hidden"
                key={animationKey}
              >
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-600 rounded-full animate-central-grow"></div>

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 320 400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <line
                    className="animate-draw-line-1"
                    x1="160"
                    y1="200"
                    x2="80"
                    y2="120"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    opacity="0"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                  <line
                    className="animate-draw-line-2"
                    x1="160"
                    y1="200"
                    x2="240"
                    y2="120"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    opacity="0"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                  <line
                    className="animate-draw-line-3"
                    x1="160"
                    y1="200"
                    x2="60"
                    y2="200"
                    stroke="#10b981"
                    strokeWidth="2"
                    opacity="0"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                  <line
                    className="animate-draw-line-4"
                    x1="160"
                    y1="200"
                    x2="260"
                    y2="200"
                    stroke="#10b981"
                    strokeWidth="2"
                    opacity="0"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                  <line
                    className="animate-draw-line-5"
                    x1="160"
                    y1="200"
                    x2="80"
                    y2="280"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    opacity="0"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                  <line
                    className="animate-draw-line-6"
                    x1="160"
                    y1="200"
                    x2="240"
                    y2="280"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    opacity="0"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                  <line
                    className="animate-draw-line-7"
                    x1="160"
                    y1="200"
                    x2="160"
                    y2="80"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    opacity="0"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                  <line
                    className="animate-draw-line-8"
                    x1="160"
                    y1="200"
                    x2="160"
                    y2="320"
                    stroke="#ef4444"
                    strokeWidth="2"
                    opacity="0"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                </svg>

                <div
                  className="absolute w-4 h-4 bg-blue-100 rounded-full animate-node-1"
                  style={{ top: "30%", left: "25%" }}
                >
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap animate-label-appear">
                    AI Solutions
                  </div>
                </div>

                <div
                  className="absolute w-4 h-4 bg-blue-500 rounded-full animate-node-2"
                  style={{ top: "30%", right: "25%" }}
                >
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap animate-label-appear">
                    Custom Software
                  </div>
                </div>

                <div
                  className="absolute w-4 h-4 bg-green-500 rounded-full animate-node-3"
                  style={{ top: "50%", left: "18%" }}
                >
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-green-600 whitespace-nowrap animate-label-appear">
                    Consulting
                  </div>
                </div>

                <div
                  className="absolute w-4 h-4 bg-green-500 rounded-full animate-node-4"
                  style={{ top: "50%", right: "18%" }}
                >
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-green-600 whitespace-nowrap animate-label-appear">
                    Innovation
                  </div>
                </div>

                <div
                  className="absolute w-4 h-4 bg-amber-500 rounded-full animate-node-5"
                  style={{ top: "70%", left: "25%" }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-amber-600 whitespace-nowrap animate-label-appear">
                    Digital Transform
                  </div>
                </div>

                <div
                  className="absolute w-4 h-4 bg-amber-500 rounded-full animate-node-6"
                  style={{ top: "70%", right: "25%" }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-amber-600 whitespace-nowrap animate-label-appear">
                    Business Solutions
                  </div>
                </div>

                <div
                  className="absolute w-4 h-4 bg-purple-500 rounded-full animate-node-7"
                  style={{ top: "20%", left: "50%" }}
                >
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-purple-600 whitespace-nowrap animate-label-appear">
                    Vision
                  </div>
                </div>

                <div
                  className="absolute w-4 h-4 bg-red-500 rounded-full animate-node-8"
                  style={{ top: "80%", left: "50%" }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-red-600 whitespace-nowrap animate-label-appear">
                    Growth
                  </div>
                </div>

                <div
                  className="absolute w-2 h-2 bg-blue-600 rounded-full animate-client-node"
                  style={{ top: "15%", left: "15%" }}
                ></div>
                <div
                  className="absolute w-2 h-2 bg-slate-600 rounded-full animate-client-node"
                  style={{ top: "15%", right: "15%" }}
                ></div>
                <div
                  className="absolute w-2 h-2 bg-slate-400 rounded-full animate-client-node"
                  style={{ top: "85%", left: "15%" }}
                ></div>
                <div
                  className="absolute w-2 h-2 bg-slate-400 rounded-full animate-client-node"
                  style={{ top: "85%", right: "15%" }}
                ></div>
                <div
                  className="absolute w-2 h-2 bg-slate-400 rounded-full animate-client-node"
                  style={{ top: "35%", left: "5%" }}
                ></div>
                <div
                  className="absolute w-2 h-2 bg-yellow-500 rounded-full animate-client-node"
                  style={{ top: "35%", right: "5%" }}
                ></div>

                <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle-1"></div>
                <div className="absolute w-1 h-1 bg-green-400 rounded-full animate-particle-2"></div>
                <div className="absolute w-1 h-1 bg-amber-400 rounded-full animate-particle-3"></div>
                <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-particle-4"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 text-sm font-bold text-blue-700 whitespace-nowrap animate-central-label">
                  WIT Innovations
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-none opacity-70 hidden lg:block px-4">
              <p className="text-lg mb-6">
                WIT Innovations LTD was founded with a simple yet powerful
                vision: to bridge the gap between cutting-edge technology and
                practical business solutions. Our journey began when we
                recognized the growing need for businesses to not just adopt new
                technologies, but to truly understand and leverage them for
                sustainable growth.
              </p>
              <p className="text-lg mb-6">
                What started as a passion project has evolved into a
                comprehensive technology consultancy that serves clients across
                various industries. We believe that innovation isn&apos;t just
                about using the latest tools—it&apos;s about applying the right
                technology in the right way to solve real-world problems.
              </p>
              <p className="text-lg">
                Today, WIT Innovations stands as a trusted partner for
                businesses looking to navigate the complex landscape of digital
                transformation, artificial intelligence, and custom software
                development.
              </p>
            </div>
          </div>

          <div className="lg:hidden px-4 py-8 opacity-70">
            <p className="text-base mb-4">
              WIT Innovations LTD was founded with a simple yet powerful vision:
              to bridge the gap between cutting-edge technology and practical
              business solutions.
            </p>
            <p className="text-base mb-4">
              What started as a passion project has evolved into a comprehensive
              technology consultancy that serves clients across various
              industries.
            </p>
            <p className="text-base">
              Today, WIT Innovations stands as a trusted partner for businesses
              looking to navigate the complex landscape of digital
              transformation, artificial intelligence, and custom software
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
