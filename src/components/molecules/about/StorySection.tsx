"use client";

import { useEffect, useState } from "react";

const StorySection = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our Story
          </h2>

          {/* Flex Container for Animation and Text */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Animation Container - Network Growth */}
            <div className="flex-1 flex justify-center">
              <div
                className="relative w-[100%] h-[50vh] min-h-[400px] bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg overflow-hidden"
                key={animationKey}
              >
                {/* Central Core Node - WIT Innovations */}
                <div className="central-node absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full"></div>

                {/* Connection Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 320 400"
                >
                  {/* Lines connecting nodes */}
                  <line
                    className="connection-line line-1"
                    x1="160"
                    y1="200"
                    x2="80"
                    y2="120"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-2"
                    x1="160"
                    y1="200"
                    x2="240"
                    y2="120"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-3"
                    x1="160"
                    y1="200"
                    x2="60"
                    y2="200"
                    stroke="#10b981"
                    strokeWidth="2"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-4"
                    x1="160"
                    y1="200"
                    x2="260"
                    y2="200"
                    stroke="#10b981"
                    strokeWidth="2"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-5"
                    x1="160"
                    y1="200"
                    x2="80"
                    y2="280"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-6"
                    x1="160"
                    y1="200"
                    x2="240"
                    y2="280"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-7"
                    x1="160"
                    y1="200"
                    x2="160"
                    y2="80"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-8"
                    x1="160"
                    y1="200"
                    x2="160"
                    y2="320"
                    stroke="#ef4444"
                    strokeWidth="2"
                    opacity="0"
                  />

                  {/* Secondary connections */}
                  <line
                    className="connection-line line-9"
                    x1="80"
                    y1="120"
                    x2="240"
                    y2="120"
                    stroke="#6b7280"
                    strokeWidth="1"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-10"
                    x1="60"
                    y1="200"
                    x2="260"
                    y2="200"
                    stroke="#6b7280"
                    strokeWidth="1"
                    opacity="0"
                  />
                  <line
                    className="connection-line line-11"
                    x1="80"
                    y1="280"
                    x2="240"
                    y2="280"
                    stroke="#6b7280"
                    strokeWidth="1"
                    opacity="0"
                  />
                </svg>

                {/* Technology Nodes */}
                <div
                  className="tech-node node-1 absolute w-4 h-4 bg-blue-100 rounded-full"
                  style={{ top: "30%", left: "25%" }}
                >
                  <div className="node-label absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap">
                    AI Solutions
                  </div>
                </div>

                <div
                  className="tech-node node-2 absolute w-4 h-4 bg-blue-500 rounded-full"
                  style={{ top: "30%", right: "25%" }}
                >
                  <div className="node-label absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap">
                    Custom Software
                  </div>
                </div>

                <div
                  className="tech-node node-3 absolute w-4 h-4 bg-green-500 rounded-full"
                  style={{ top: "50%", left: "18%" }}
                >
                  <div className="node-label absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-green-600 whitespace-nowrap">
                    Consulting
                  </div>
                </div>

                <div
                  className="tech-node node-4 absolute w-4 h-4 bg-green-500 rounded-full"
                  style={{ top: "50%", right: "18%" }}
                >
                  <div className="node-label absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-green-600 whitespace-nowrap">
                    Innovation
                  </div>
                </div>

                <div
                  className="tech-node node-5 absolute w-4 h-4 bg-amber-500 rounded-full"
                  style={{ top: "70%", left: "25%" }}
                >
                  <div className="node-label absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-amber-600 whitespace-nowrap">
                    Digital Transform
                  </div>
                </div>

                <div
                  className="tech-node node-6 absolute w-4 h-4 bg-amber-500 rounded-full"
                  style={{ top: "70%", right: "25%" }}
                >
                  <div className="node-label absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-amber-600 whitespace-nowrap">
                    Business Solutions
                  </div>
                </div>

                <div
                  className="tech-node node-7 absolute w-4 h-4 bg-purple-500 rounded-full"
                  style={{ top: "20%", left: "50%" }}
                >
                  <div className="node-label absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-purple-600 whitespace-nowrap">
                    Vision
                  </div>
                </div>

                <div
                  className="tech-node node-8 absolute w-4 h-4 bg-red-500 rounded-full"
                  style={{ top: "80%", left: "50%" }}
                >
                  <div className="node-label absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-red-600 whitespace-nowrap">
                    Growth
                  </div>
                </div>

                {/* Client/Industry Nodes - smaller, appearing later */}
                <div
                  className="client-node client-1 absolute w-2 h-2 bg-[#024FF0]  rounded-full"
                  style={{ top: "15%", left: "15%" }}
                ></div>
                <div
                  className="client-node client-2 absolute w-2 h-2 bg-[#2525252] rounded-full"
                  style={{ top: "15%", right: "15%" }}
                ></div>
                <div
                  className="client-node client-3 absolute w-2 h-2 bg-slate-400 rounded-full"
                  style={{ top: "85%", left: "15%" }}
                ></div>
                <div
                  className="client-node client-4 absolute w-2 h-2 bg-slate-400 rounded-full"
                  style={{ top: "85%", right: "15%" }}
                ></div>
                <div
                  className="client-node client-5 absolute w-2 h-2 bg-slate-400 rounded-full"
                  style={{ top: "35%", left: "5%" }}
                ></div>
                <div
                  className="client-node client-6 absolute w-2 h-2 bg-yellow-500 rounded-full"
                  style={{ top: "35%", right: "5%" }}
                ></div>

                {/* Data Flow Particles */}
                <div className="data-particle particle-1 absolute w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="data-particle particle-2 absolute w-1 h-1 bg-green-400 rounded-full"></div>
                <div className="data-particle particle-3 absolute w-1 h-1 bg-amber-400 rounded-full"></div>
                <div className="data-particle particle-4 absolute w-1 h-1 bg-purple-400 rounded-full"></div>

                {/* Central Label */}
                <div className="central-label absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 text-sm font-bold text-blue-700 whitespace-nowrap">
                  WIT Innovations
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 max-w-none opacity-70">
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
                various industries. We believe that innovation isn't just about
                using the latest tools—it's about applying the right technology
                in the right way to solve real-world problems.
              </p>
              <p className="text-lg">
                Today, WIT Innovations stands as a trusted partner for
                businesses looking to navigate the complex landscape of digital
                transformation, artificial intelligence, and custom software
                development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Central node animation */
        .central-node {
          animation: centralPulse 2s ease-in-out infinite,
            centralGrow 1s ease-out forwards;
        }

        .central-label {
          opacity: 0;
          animation: labelAppear 1s ease-out 1s forwards;
        }

        /* Tech nodes appear in sequence */
        .tech-node {
          opacity: 0;
          transform: scale(0);
        }

        .node-1 {
          animation: nodeAppear 0.8s ease-out 2s forwards,
            nodePulse 3s ease-in-out 3s infinite;
        }
        .node-2 {
          animation: nodeAppear 0.8s ease-out 2.5s forwards,
            nodePulse 3s ease-in-out 3.5s infinite;
        }
        .node-3 {
          animation: nodeAppear 0.8s ease-out 3s forwards,
            nodePulse 3s ease-in-out 4s infinite;
        }
        .node-4 {
          animation: nodeAppear 0.8s ease-out 3.5s forwards,
            nodePulse 3s ease-in-out 4.5s infinite;
        }
        .node-5 {
          animation: nodeAppear 0.8s ease-out 4s forwards,
            nodePulse 3s ease-in-out 5s infinite;
        }
        .node-6 {
          animation: nodeAppear 0.8s ease-out 4.5s forwards,
            nodePulse 3s ease-in-out 5.5s infinite;
        }
        .node-7 {
          animation: nodeAppear 0.8s ease-out 5s forwards,
            nodePulse 3s ease-in-out 6s infinite;
        }
        .node-8 {
          animation: nodeAppear 0.8s ease-out 5.5s forwards,
            nodePulse 3s ease-in-out 6.5s infinite;
        }

        /* Node labels appear with nodes */
        .node-label {
          opacity: 0;
          animation: labelAppear 0.5s ease-out 0.3s forwards;
        }

        /* Connection lines draw in sequence */
        .connection-line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
        }

        .line-1 {
          animation: drawLine 1s ease-out 2.2s forwards;
        }
        .line-2 {
          animation: drawLine 1s ease-out 2.7s forwards;
        }
        .line-3 {
          animation: drawLine 1s ease-out 3.2s forwards;
        }
        .line-4 {
          animation: drawLine 1s ease-out 3.7s forwards;
        }
        .line-5 {
          animation: drawLine 1s ease-out 4.2s forwards;
        }
        .line-6 {
          animation: drawLine 1s ease-out 4.7s forwards;
        }
        .line-7 {
          animation: drawLine 1s ease-out 5.2s forwards;
        }
        .line-8 {
          animation: drawLine 1s ease-out 5.7s forwards;
        }
        .line-9 {
          animation: drawLine 1s ease-out 6.2s forwards;
        }
        .line-10 {
          animation: drawLine 1s ease-out 6.7s forwards;
        }
        .line-11 {
          animation: drawLine 1s ease-out 7.2s forwards;
        }

        /* Client nodes appear later */
        .client-node {
          opacity: 0;
          transform: scale(0);
          animation: nodeAppear 0.5s ease-out 8s forwards,
            clientPulse 4s ease-in-out 9s infinite;
        }

        .client-1 {
          animation-delay: 8s, 9s;
        }
        .client-2 {
          animation-delay: 8.2s, 9.2s;
        }
        .client-3 {
          animation-delay: 8.4s, 9.4s;
        }
        .client-4 {
          animation-delay: 8.6s, 9.6s;
        }
        .client-5 {
          animation-delay: 8.8s, 9.8s;
        }
        .client-6 {
          animation-delay: 9s, 10s;
        }

        /* Data particles flow along connections */
        .data-particle {
          opacity: 0;
          animation: particleFlow1 3s linear 10s infinite;
        }

        .particle-1 {
          animation: particleFlow1 3s linear 10s infinite;
        }
        .particle-2 {
          animation: particleFlow2 3s linear 10.5s infinite;
        }
        .particle-3 {
          animation: particleFlow3 3s linear 11s infinite;
        }
        .particle-4 {
          animation: particleFlow4 3s linear 11.5s infinite;
        }

        @keyframes centralGrow {
          0% {
            transform: translate(-50%, -50%) scale(0);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes centralPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }

        @keyframes nodeAppear {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes nodePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes clientPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes labelAppear {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 100;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes particleFlow1 {
          0% {
            opacity: 1;
            left: 50%;
            top: 50%;
          }
          100% {
            opacity: 0;
            left: 25%;
            top: 30%;
          }
        }

        @keyframes particleFlow2 {
          0% {
            opacity: 1;
            left: 50%;
            top: 50%;
          }
          100% {
            opacity: 0;
            right: 25%;
            top: 30%;
          }
        }

        @keyframes particleFlow3 {
          0% {
            opacity: 1;
            left: 50%;
            top: 50%;
          }
          100% {
            opacity: 0;
            left: 25%;
            top: 70%;
          }
        }

        @keyframes particleFlow4 {
          0% {
            opacity: 1;
            left: 50%;
            top: 50%;
          }
          100% {
            opacity: 0;
            right: 25%;
            top: 70%;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .node-label {
            font-size: 0.625rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StorySection;
