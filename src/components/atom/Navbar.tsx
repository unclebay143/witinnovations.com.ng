"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Past Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(false);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setShowNavbar(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.header
            key="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-[#252525] text-white hadow-md"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-medium">
              <div className="flex justify-between items-center h-[106px]">
                <Link href="/">
                  <img
                    src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1751380639/WIT-logo_rcbccr.png"
                    alt="logo"
                    className="h-16 w-16 md:h-24 md:w-28"
                  />
                </Link>

                <nav className="hidden md:flex space-x-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-[#024FF0] transition duration-300 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    className="focus:outline-none"
                  >
                    {isOpen ? (
                      <X size={24} className="text-red-700" />
                    ) : (
                      <Menu size={24} className="text-[#FFF]" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {isOpen && (
        <div className="md:hidden h-screen pt-24 px-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block hover:text-[#024FF0] text-lg font-medium transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
