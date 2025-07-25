"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
// import { Logo } from "./logo";

interface NavItem {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
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
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
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
            className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 ${
              isScrolled ? "bg-[#252525]" : ""
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 font-medium">
              <div className="flex justify-between items-center h-[106px]">
                <Link href="/">
                  <Logo />
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
                      <X size={24} className="text-[#FFF]" />
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-[#252525] bg-opacity-95"
            onClick={() => setIsOpen(false)}
          >
            <div className="h-screen pt-32 px-6 space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="block text-white hover:text-[#024FF0] hover:border-[#024FF0] border-b border-[#353535] text-xl font-medium transition duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
