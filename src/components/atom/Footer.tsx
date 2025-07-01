"use client";

import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import CTA from "./CTA";

export default function Footer() {
  return (
    <footer className="relative bg-[#252525] text-white pt-44 h-[80v] mt-24">
      <CTA />
      <div className="relative z-10 px-6 md:px-2 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-white">
        <div className="flex items-center">
          <h1 className="rotate-[-90deg] tracking-widest font-bold text-[#024FF0]">
            CONTACT
          </h1>
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 opacity-80">
              Let&apos;s connect and explore how we can collaborate to drive
              innovation and build digital solutions that scale across the
              globe.
            </p>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>Location:</strong>
                <br />
                15 XYZ Street, Garki, Abuja, Nigeria
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                +234 803 262 4679
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:hello@witinnovations.com.ng"
                  className="underline text-[#024FF0]"
                >
                  hello@witinnovations.com.ng
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-80 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1706823871410-ed8b01faef7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmxkJTIwbWFwfGVufDB8fDB8fHww"
            alt="World Map"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmxkfGVufDB8fDB8fHww')",
        }}
      ></div>
      <div className="relative z-10 px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm max-w-6xl mx-auto">
        <div>
          {/* <img src="" alt="WIT Innovations Logo" className="w-32 mb-4" /> */}
          <div className="flex gap-3 mt-4">
            <BsTwitterX className="hover:text-[#024FF0] h-6 w-6 cursor-pointer" />
            <FaFacebookF className="hover:text-[#024FF0] h-6 w-6 cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#024FF0] h-6 w-6 cursor-pointer" />
            <FaYoutube className="hover:text-[#024FF0] h-6 w-6 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="space-y-4 opacity-70">
            <li>NO. 15 XYZ Street, Garki, Abuja, Nigeria</li>
            <li className="mt-2"> +234 803 262 4679</li>
            <li>hello@witinnovations.com.ng</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Main Menu</h4>
          <ul className="space-y-4 opacity-70">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Past Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">What We Do</h4>
          <ul className="space-y-4 opacity-70">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Startup Support</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-[#024FF0] max-w-6xl mx-auto text-center py-6 px-4 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center">
        <span className="opacity-70">
          © {new Date().getFullYear()} WIT Innovations LTD. All rights reserved.
        </span>
        <div className="space-x-4 mt-2 md:mt-0 opacity-70">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
