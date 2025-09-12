/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const navfun = () => {
    if (location.pathname.startsWith("/product/")) {
      return "bg-dark-900 backdrop-blur-sm";
    } else {
      return "bg-transparent";
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-nsr-light dark:bg-dark-900/70 backdrop-blur-sm border-b border-nsr-primary/10`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-14 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/logo-removebg.png" alt="Logo" className="h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 mx-2 rounded-md font-medium transition duration-300 text-lg ${
                  isActive(link.path)
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : scrolled
                    ? "text-dark-900 hover:text-primary-600"
                    : "text-dark-900 hover:text-primary-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-dark-900 px-2 py-1 rounded text-lg font-medium hover:text-primary-600"
            >
              {language.toUpperCase()}
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-dark-900/60 hover:text-dark-900 transition-colors duration-300 text-2xl focus:outline-none"
            >
              {isOpen ? "✕" : "☰"}
            </button>
            {/* Mobile Menu */}
            <div
              className={`absolute top-full left-0 w-full md:hidden transition-all duration-300 ease-in-out z-50 shadow-lg ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col items-center gap-5 py-10 bg-nsr-light dark:bg-dark-900 shadow-xl px-6 font-poppins">
                {[
                  { to: "/", label: t("nav.home") },
                  { to: "/products", label: t("nav.products") },
                  { to: "/about", label: t("nav.about") },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="relative group text-lg font-semibold text-primary-600 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}

                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="bg-primary-600 text-white font-medium px-8 py-3 rounded-full hover:scale-105 hover:bg-primary-700 transition-transform duration-300 shadow-md">
                    ✦ {t("nav.contact")} ✦
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
