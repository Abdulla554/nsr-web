/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, Monitor, Cpu, HardDrive } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "/", icon: Monitor },
    { name: "الأكثر مبيعاً", path: "/bestsellers", icon: Cpu },
    { name: "منتجات جديدة", path: "/products", icon: HardDrive },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-dark-900 backdrop-blur-xl border-b border-[#2C6D90]/30 shadow-lg'
        : 'bg-dark-900 backdrop-blur-md'
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-[#2C6D90]/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <img src="logo-removebg.png" className="h-24 rounded-3xl relative z-10 drop-shadow-2xl" />
              {/* Glow Ring */}
              <motion.div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-blue-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
            </div>

            <div className="hidden md:block">
              <motion.h1
                className="text-2xl font-bold text-[#F9F3EF]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Nsr-Store
              </motion.h1>
              <motion.p
                className="text-sm text-[#749BC2] -mt-1 font-medium"
              >
                أجهزتك الموثوقة تبدأ من هنا
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav dir="rtl" className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.path}
                  href={link.path}
                  className="relative group px-6 py-3 rounded-xl transition-all duration-300 overflow-hidden hover:bg-[#0f3461]/50"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="relative flex items-center gap-3 text-[#F9F3EF]/80 group-hover:text-[#F9F3EF] transition-all duration-300">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 group-hover:text-[#749BC2] transition-colors duration-300" />
                    )}
                    <span className="font-semibold text-base">
                      {link.name}
                    </span>
                  </div>

                  {/* Active Indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-[#749BC2] rounded-full w-0 group-hover:w-8 transition-all duration-300"
                    style={{ transform: "translateX(-50%)" }}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">

            {/* Search Bar */}
            <motion.div
              className={`hidden md:flex items-center transition-all duration-400 ${searchFocused
                ? 'bg-[#749BC2]/25 border-[#2C6D90]/60 shadow-lg scale-[1.02]'
                : 'bg-[#749BC2]/15 border-[#749BC2]/40'
                } backdrop-blur-md rounded-2xl border px-5 py-3 min-w-80`}
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className={`w-5 h-5 transition-all duration-300 ml-3 ${searchFocused ? 'text-[#2C6D90]' : 'text-[#F9F3EF]/60'
                  }`}
              >
                <Search className="w-full h-full" />
              </motion.div>

              <input
                type="text"
                placeholder="ابحث عن المنتج الذي تريده..."
                className="bg-transparent text-[#F9F3EF] placeholder-[#F9F3EF]/50 outline-none flex-1 text-right font-medium"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />

              <motion.button
                className="bg-[#2C6D90] hover:bg-[#2C6D90]/90 text-[#F9F3EF] rounded-xl p-2 transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Shopping Cart */}
            <motion.button
              className="relative bg-[#749BC2]/20 hover:bg-[#749BC2]/30 border border-[#749BC2]/50 text-[#F9F3EF] rounded-2xl p-3 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="w-6 h-6 group-hover:text-[#2C6D90] transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <ShoppingBag className="w-full h-full" />
              </motion.div>

              {/* Cart Badge */}
              <motion.span
                className="absolute -top-2 -right-2 bg-[#2C6D90] text-[#F9F3EF] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2
              </motion.span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#F9F3EF]/80 hover:text-[#F9F3EF] transition-colors duration-300 p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-6 overflow-hidden"
            >
              <div className="bg-[#749BC2]/20 backdrop-blur-lg rounded-2xl p-6 border border-[#2C6D90]/30 shadow-lg">

                {/* Mobile Search */}
                <div className="flex items-center bg-[#1a1a2e]/40 backdrop-blur-sm rounded-xl px-4 py-3 mb-6 border border-[#749BC2]/30">
                  <Search className="w-5 h-5 text-[#F9F3EF]/60 ml-3" />
                  <input
                    type="text"
                    placeholder="ابحث عن المنتج الذي تريده..."
                    className="bg-transparent text-[#F9F3EF] placeholder-[#F9F3EF]/50 outline-none flex-1 text-right font-medium"
                  />
                  <button className="bg-[#2C6D90] text-[#F9F3EF] rounded-lg p-2">
                    <Search className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.a
                        key={item.path}
                        href={item.path}
                        className="flex items-center gap-3 text-[#F9F3EF]/80 hover:text-[#F9F3EF] p-3 rounded-xl hover:bg-[#1a1a2e]/30 transition-all duration-300 group"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        {IconComponent && <IconComponent className="w-5 h-5 group-hover:text-[#2C6D90] transition-colors duration-300" />}
                        <span className="font-medium text-base">{item.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;