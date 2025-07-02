"use client";

import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import CTA from "./CTA";

export default function Footer() {
  return (
    <footer className="relative bg-[#1e1e1e] text-white pt-44 min-h-screen mt-24 ">
      <CTA />

      {/* Animated Video Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to background image if video fails to load
            const target = e.target as HTMLVideoElement;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "block";
          }}
        >
          <source src="/videos/ai-vids.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback background image */}
        <div
          className="w-full h-full bg-cover bg-center hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0')",
          }}
        />

        {/* Tech overlay effects */}
        <div className="absolute inset-0">
          {/* Animated gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#252525] via-transparent to-transparent opacity-60" />

          {/* Floating tech particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#024FF0] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-35"></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-40"></div>

          {/* Digital grid overlay */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `
                linear-gradient(rgba(2, 79, 240, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(2, 79, 240, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Animated connection lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="lineGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#024FF0" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#024FF0" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient
                id="lineGradient2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#4ECDC4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#45B7D1" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Flowing data lines */}
            <path
              d="M0,150 Q300,100 600,150 T1200,150"
              stroke="url(#lineGradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,250 Q400,200 800,250 T1600,250"
              stroke="url(#lineGradient2)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
            <path
              d="M0,350 Q250,300 500,350 T1000,350"
              stroke="url(#lineGradient1)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "3s" }}
            />

            {/* Network nodes */}
            <circle
              cx="200"
              cy="150"
              r="3"
              fill="#024FF0"
              className="animate-pulse"
              opacity="0.6"
            />
            <circle
              cx="600"
              cy="150"
              r="2"
              fill="#00FFFF"
              className="animate-ping"
              opacity="0.5"
            />
            <circle
              cx="400"
              cy="250"
              r="2.5"
              fill="#4ECDC4"
              className="animate-pulse"
              opacity="0.4"
            />
            <circle
              cx="800"
              cy="250"
              r="2"
              fill="#FF6B6B"
              className="animate-ping"
              opacity="0.5"
            />
          </svg>

          {/* Floating code snippets effect */}
          <div className="absolute top-1/6 right-1/6 opacity-20 text-xs font-mono text-[#024FF0] animate-pulse">
            {"<AI />"}
          </div>
          <div
            className="absolute bottom-1/3 left-1/6 opacity-15 text-xs font-mono text-cyan-400 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            {'{ web: "dev" }'}
          </div>
          <div
            className="absolute top-2/3 right-1/3 opacity-25 text-xs font-mono text-purple-400 animate-pulse"
            style={{ animationDelay: "4s" }}
          >
            {"function() {}"}
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-2 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-white">
        <div className="flex items-center">
          <h1 className="rotate-[-90deg] tracking-widest font-bold text-[#024FF0] drop-shadow-lg">
            CONTACT
          </h1>
          <div>
            <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">
              Get in Touch
            </h2>
            <p className="mb-6 opacity-90 drop-shadow-sm">
              Let&apos;s connect and explore how we can collaborate to drive
              innovation and build digital solutions that scale across the
              globe.
            </p>
            <div className="space-y-4 opacity-90">
              <p className="drop-shadow-sm">
                <strong>Location:</strong>
                <br />
                15 XYZ Street, Garki, Abuja, Nigeria
              </p>
              <p className="drop-shadow-sm">
                <strong>Phone:</strong>
                <br />
                +234 803 262 4679
              </p>
              <p className="drop-shadow-sm">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:hello@witinnovations.com.ng"
                  target="blank"
                  className="underline text-[#024FF0] hover:text-cyan-400 transition-colors duration-300"
                >
                  hello@witinnovations.com.ng
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-80 md:h-full">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <img
              src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1751471840/world-map_sgmnly.jpg"
              alt="World Map"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#024FF0]/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm max-w-6xl mx-auto">
        <div>
          <div className="flex gap-3 mt-4">
            <BsTwitterX className="hover:text-[#024FF0] hover:scale-110 h-6 w-6 cursor-pointer transition-all duration-300 drop-shadow-lg" />
            <FaFacebookF className="hover:text-[#024FF0] hover:scale-110 h-6 w-6 cursor-pointer transition-all duration-300 drop-shadow-lg" />
            <FaLinkedinIn className="hover:text-[#024FF0] hover:scale-110 h-6 w-6 cursor-pointer transition-all duration-300 drop-shadow-lg" />
            <FaYoutube className="hover:text-[#024FF0] hover:scale-110 h-6 w-6 cursor-pointer transition-all duration-300 drop-shadow-lg" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 drop-shadow-lg">Contact</h4>
          <ul className="space-y-4 opacity-80">
            <li className="drop-shadow-sm">
              NO. 15 XYZ Street, Garki, Abuja, Nigeria
            </li>
            <li className="mt-2 drop-shadow-sm"> +234 803 262 4679</li>
            <li className="drop-shadow-sm">hello@witinnovations.com.ng</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 drop-shadow-lg">
            Main Menu
          </h4>
          <ul className="space-y-4 opacity-80">
            <li>
              <a
                href="/"
                className="hover:underline hover:text-[#024FF0] transition-all duration-300 drop-shadow-sm"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline hover:text-[#024FF0] transition-all duration-300 drop-shadow-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:underline hover:text-[#024FF0] transition-all duration-300 drop-shadow-sm"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:underline hover:text-[#024FF0] transition-all duration-300 drop-shadow-sm"
              >
                Past Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:text-[#024FF0] transition-all duration-300 drop-shadow-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 drop-shadow-lg">
            What We Do
          </h4>
          <ul className="space-y-4 opacity-80">
            <li className="drop-shadow-sm">Web Development</li>
            <li className="drop-shadow-sm">Mobile Apps</li>
            <li className="drop-shadow-sm">Startup Support</li>
            <li className="drop-shadow-sm">UI/UX Design</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#024FF0] max-w-6xl mx-auto text-center py-6 px-4 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center backdrop-blur-sm">
        <span className="opacity-80 drop-shadow-sm">
          © {new Date().getFullYear()} WIT Innovations LTD. All rights reserved.
        </span>
        <div className="space-x-4 mt-2 md:mt-0 opacity-80">
          <Link
            href="/privacy"
            className="hover:underline hover:text-[#024FF0] transition-all duration-300 drop-shadow-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:underline hover:text-[#024FF0] transition-all duration-300 drop-shadow-sm"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
