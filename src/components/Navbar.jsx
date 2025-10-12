/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Menu, X, Monitor, Cpu, HardDrive, Package, Tag, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from '../store/index';
import { useSearchProducts, useCategories, useBrands } from '../hooks';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const mobileMenuRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // استخدام Zustand store للحصول على عدد العناصر في السلة
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  // استخدام hooks للبحث والبيانات
  const { data: searchResults, isLoading: isSearchLoading } = useSearchProducts(searchTerm, { limit: 5 });
  const { data: categories } = useCategories();
  const { data: brands } = useBrands();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إغلاق القائمة عند النقر خارجها أو الضغط على Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // وظائف البحث
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSearchResults(value.length > 0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setShowSearchResults(false);
      setSearchTerm("");
    }
  };

  const handleSearchItemClick = (type, id, name) => {
    let path = "";
    switch (type) {
      case "product":
        path = `/product/${id}`;
        break;
      case "category":
        path = `/categories/${id}`;
        break;
      case "brand":
        path = `/products?brandId=${id}`;
        break;
      default:
        return;
    }
    navigate(path);
    setShowSearchResults(false);
    setSearchTerm("");
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
    if (searchTerm.length > 0) {
      setShowSearchResults(true);
    }
  };

  const handleSearchBlur = () => {
    // تأخير إخفاء النتائج للسماح بالضغط على العناصر
    setTimeout(() => {
      setSearchFocused(false);
      setShowSearchResults(false);
    }, 200);
  };

  // فلترة النتائج المحلية للفئات والبراندات
  const filteredCategories = categories?.data?.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const filteredBrands = brands?.data?.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const navLinks = [
    { name: "الرئيسية", path: "/", icon: Monitor },
    { name: "الفئات", path: "/categories", icon: Cpu },
    { name: "المنتجات", path: "/products", icon: HardDrive },
    { name: "طلباتي", path: "/orders", icon: Package },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-20 transition-all duration-500 ${scrolled
        ? 'bg-dark-900 backdrop-blur-xl border-b border-[#2C6D90]/30 shadow-lg'
        : 'bg-dark-900 backdrop-blur-md'
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-2 sm:gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-[#2C6D90]/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="/logo-removebg.png"
                className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 rounded-2xl sm:rounded-3xl relative z-10 drop-shadow-2xl"
                alt="Nsr Store Logo"
              />
              {/* Glow Ring */}
              <motion.div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-gradient-to-r from-blue-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
            </div>

            <div className="hidden sm:block">
              <motion.h1
                className="text-lg sm:text-xl md:text-2xl font-bold text-[#F9F3EF]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Nsr-Store
              </motion.h1>
              <motion.p
                className="text-xs sm:text-sm text-[#749BC2] -mt-1 font-medium hidden md:block"
              >
                أجهزتك الموثوقة تبدأ من هنا
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav dir="rtl" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.path}
                  href={link.path}
                  className="relative group px-3 xl:px-6 py-2 xl:py-3 rounded-xl transition-all duration-300 overflow-hidden hover:bg-[#0f3461]/50"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="relative flex items-center gap-2 xl:gap-3 text-[#F9F3EF]/80 group-hover:text-[#F9F3EF] transition-all duration-300">
                    {IconComponent && (
                      <IconComponent className="w-4 xl:w-5 h-4 xl:h-5 group-hover:text-[#749BC2] transition-colors duration-300" />
                    )}
                    <span className="font-semibold text-sm xl:text-base">
                      {link.name}
                    </span>
                  </div>

                  {/* Active Indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-[#749BC2] rounded-full w-0 group-hover:w-6 xl:group-hover:w-8 transition-all duration-300"
                    style={{ transform: "translateX(-50%)" }}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <motion.form
                onSubmit={handleSearchSubmit}
                className={`flex items-center transition-all duration-400 ${searchFocused
                  ? 'bg-[#749BC2]/25 border-[#2C6D90]/60 shadow-lg scale-[1.02]'
                  : 'bg-[#749BC2]/15 border-[#749BC2]/40'
                  } backdrop-blur-md rounded-xl sm:rounded-2xl border px-3 sm:px-4 md:px-5 py-2 sm:py-3 min-w-48 sm:min-w-64 md:min-w-80`}
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className={`w-4 sm:w-5 h-4 sm:h-5 transition-all duration-300 ml-2 sm:ml-3 ${searchFocused ? 'text-[#2C6D90]' : 'text-[#F9F3EF]/60'
                    }`}
                >
                  <Search className="w-full h-full" />
                </motion.div>

                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="ابحث عن المنتج..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className="bg-transparent text-[#F9F3EF] placeholder-[#F9F3EF]/50 outline-none flex-1 text-right font-medium text-sm sm:text-base"
                />

                <motion.button
                  type="submit"
                  className="bg-[#2C6D90] hover:bg-[#2C6D90]/90 text-[#F9F3EF] rounded-lg sm:rounded-xl p-1.5 sm:p-2 transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </motion.form>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showSearchResults && searchTerm && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a2e]/95 backdrop-blur-xl border border-[#2C6D90]/30 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto"
                  >
                    {/* Loading State */}
                    {isSearchLoading && (
                      <div className="p-4 text-center">
                        <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-[#2C6D90]"></div>
                        <p className="text-[#F9F3EF]/60 text-sm mt-2">جاري البحث...</p>
                      </div>
                    )}

                    {/* Search Results */}
                    {!isSearchLoading && (
                      <>
                        {/* Products */}
                        {searchResults?.data?.length > 0 && (
                          <div className="p-3">
                            <h3 className="text-[#749BC2] text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-2">
                              <Package className="w-4 h-4" />
                              المنتجات
                            </h3>
                            <div className="space-y-1">
                              {searchResults.data.slice(0, 3).map((product) => (
                                <button
                                  key={product.id}
                                  onClick={() => handleSearchItemClick('product', product.id, product.name)}
                                  className="w-full text-right p-2 hover:bg-[#2C6D90]/20 rounded-lg transition-colors duration-200 text-[#F9F3EF] text-sm"
                                >
                                  <p className="font-medium">{product.name}</p>
                                  <p className="text-[#749BC2] text-xs">{product.category?.name}</p>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Categories */}
                        {filteredCategories.length > 0 && (
                          <div className="p-3 border-t border-[#2C6D90]/20">
                            <h3 className="text-[#749BC2] text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-2">
                              <Tag className="w-4 h-4" />
                              الفئات
                            </h3>
                            <div className="space-y-1">
                              {filteredCategories.slice(0, 2).map((category) => (
                                <button
                                  key={category.id}
                                  onClick={() => handleSearchItemClick('category', category.id, category.name)}
                                  className="w-full text-right p-2 hover:bg-[#2C6D90]/20 rounded-lg transition-colors duration-200 text-[#F9F3EF] text-sm"
                                >
                                  <p className="font-medium">{category.name}</p>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Brands */}
                        {filteredBrands.length > 0 && (
                          <div className="p-3 border-t border-[#2C6D90]/20">
                            <h3 className="text-[#749BC2] text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              الماركات
                            </h3>
                            <div className="space-y-1">
                              {filteredBrands.slice(0, 2).map((brand) => (
                                <button
                                  key={brand.id}
                                  onClick={() => handleSearchItemClick('brand', brand.id, brand.name)}
                                  className="w-full text-right p-2 hover:bg-[#2C6D90]/20 rounded-lg transition-colors duration-200 text-[#F9F3EF] text-sm"
                                >
                                  <p className="font-medium">{brand.name}</p>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* No Results */}
                        {(!searchResults?.data?.length && filteredCategories.length === 0 && filteredBrands.length === 0) && (
                          <div className="p-4 text-center text-[#F9F3EF]/60 text-sm">
                            لا توجد نتائج للبحث عن "{searchTerm}"
                          </div>
                        )}

                        {/* View All Results */}
                        {searchTerm && (
                          <div className="p-3 border-t border-[#2C6D90]/20">
                            <button
                              onClick={() => navigate(`/products?search=${encodeURIComponent(searchTerm)}`)}
                              className="w-full text-center p-2 bg-[#2C6D90]/20 hover:bg-[#2C6D90]/30 rounded-lg transition-colors duration-200 text-[#F9F3EF] text-sm font-medium"
                            >
                              عرض جميع النتائج
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Shopping Cart */}
            <Link to="/cart">
            <motion.button
              className="relative bg-[#749BC2]/20 hover:bg-gray-900 border border-[#749BC2]/50 text-[#F9F3EF] rounded-xl sm:rounded-2xl p-2 sm:p-3 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
          
                <motion.div
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-[#ADCEFE] transition-colors duration-300"

                >
                  <ShoppingCart className="w-full h-full" />
                </motion.div>

                {/* Cart Badge */}
                {totalItems > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-[#2C6D90] text-[#F9F3EF] text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shadow-md"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                  >
                    {totalItems}
                  </motion.span>
                )}

            </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#F9F3EF]/80 hover:text-[#F9F3EF] transition-colors duration-300 p-1.5 sm:p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <div></div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
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
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-4 sm:mt-6 overflow-hidden"
            >
              <div className="bg-[#749BC2]/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#2C6D90]/30 shadow-lg z-100">

                {/* Mobile Search */}
                <div className="relative mb-4 sm:mb-6">
                  <form onSubmit={handleSearchSubmit} className="flex items-center bg-[#1a1a2e]/40 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-[#749BC2]/30">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#F9F3EF]/60 ml-2 sm:ml-3" />
                    <input
                      type="text"
                      placeholder="ابحث عن المنتج..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="bg-transparent text-[#F9F3EF] placeholder-[#F9F3EF]/50 outline-none flex-1 text-right font-medium text-sm sm:text-base"
                    />
                    <button type="submit" className="bg-[#2C6D90] text-[#F9F3EF] rounded-lg p-1.5 sm:p-2">
                      <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </form>

                  {/* Mobile Search Results */}
                  <AnimatePresence>
                    {showSearchResults && searchTerm && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a2e]/95 backdrop-blur-xl border border-[#2C6D90]/30 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto"
                      >
                        {/* Loading State */}
                        {isSearchLoading && (
                          <div className="p-3 text-center">
                            <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-[#2C6D90]"></div>
                            <p className="text-[#F9F3EF]/60 text-xs mt-1">جاري البحث...</p>
                          </div>
                        )}

                        {/* Search Results */}
                        {!isSearchLoading && (
                          <>
                            {/* Products */}
                            {searchResults?.data?.length > 0 && (
                              <div className="p-2">
                                <h3 className="text-[#749BC2] text-xs font-semibold uppercase tracking-wide mb-1 flex items-center gap-1">
                                  <Package className="w-3 h-3" />
                                  المنتجات
                                </h3>
                                <div className="space-y-1">
                                  {searchResults.data.slice(0, 2).map((product) => (
                                    <button
                                      key={product.id}
                                      onClick={() => handleSearchItemClick('product', product.id, product.name)}
                                      className="w-full text-right p-2 hover:bg-[#2C6D90]/20 rounded-lg transition-colors duration-200 text-[#F9F3EF] text-xs"
                                    >
                                      <p className="font-medium">{product.name}</p>
                                      <p className="text-[#749BC2] text-xs">{product.category?.name}</p>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Categories */}
                            {filteredCategories.length > 0 && (
                              <div className="p-2 border-t border-[#2C6D90]/20">
                                <h3 className="text-[#749BC2] text-xs font-semibold uppercase tracking-wide mb-1 flex items-center gap-1">
                                  <Tag className="w-3 h-3" />
                                  الفئات
                                </h3>
                                <div className="space-y-1">
                                  {filteredCategories.slice(0, 2).map((category) => (
                                    <button
                                      key={category.id}
                                      onClick={() => handleSearchItemClick('category', category.id, category.name)}
                                      className="w-full text-right p-2 hover:bg-[#2C6D90]/20 rounded-lg transition-colors duration-200 text-[#F9F3EF] text-xs"
                                    >
                                      <p className="font-medium">{category.name}</p>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Brands */}
                            {filteredBrands.length > 0 && (
                              <div className="p-2 border-t border-[#2C6D90]/20">
                                <h3 className="text-[#749BC2] text-xs font-semibold uppercase tracking-wide mb-1 flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  الماركات
                                </h3>
                                <div className="space-y-1">
                                  {filteredBrands.slice(0, 2).map((brand) => (
                                    <button
                                      key={brand.id}
                                      onClick={() => handleSearchItemClick('brand', brand.id, brand.name)}
                                      className="w-full text-right p-2 hover:bg-[#2C6D90]/20 rounded-lg transition-colors duration-200 text-[#F9F3EF] text-xs"
                                    >
                                      <p className="font-medium">{brand.name}</p>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* No Results */}
                            {(!searchResults?.data?.length && filteredCategories.length === 0 && filteredBrands.length === 0) && (
                              <div className="p-3 text-center text-[#F9F3EF]/60 text-xs">
                                لا توجد نتائج للبحث عن "{searchTerm}"
                              </div>
                            )}

                            {/* View All Results */}
                            {searchTerm && (
                              <div className="p-2 border-t border-[#2C6D90]/20">
                                <button
                                  onClick={() => navigate(`/products?search=${encodeURIComponent(searchTerm)}`)}
                                  className="w-full text-center p-2 bg-[#2C6D90]/20 hover:bg-[#2C6D90]/30 rounded-lg transition-colors duration-200 text-[#F9F3EF] text-xs font-medium"
                                >
                                  عرض جميع النتائج
                                </button>
                              </div>
                            )}
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-1 sm:space-y-2">
                  {navLinks.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.a
                        key={item.path}
                        href={item.path}
                        className="flex items-center gap-2 sm:gap-3 text-[#F9F3EF]/80 hover:text-[#F9F3EF] p-2.5 sm:p-3 rounded-lg sm:rounded-xl hover:bg-[#1a1a2e]/30 transition-all duration-300 group"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#2C6D90] transition-colors duration-300" />}
                        <span className="font-medium text-sm sm:text-base">{item.name}</span>
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