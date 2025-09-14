 
import { motion } from "framer-motion";

const ProductShowcase = () => {
 
  
  const products = [
    {
      id: 1,
      image: "/s1.png",
      title: "Gaming Headset",
      category: "Audio"
    },
    {
      id: 2,
      image: "/s2.png", 
      title: "Gaming Mouse",
      category: "Peripherals"
    },
    {
      id: 3,
      image: "/s3.png",
      title: "Gaming Controller", 
      category: "Controllers"
    },
    {
      id: 4,
      image: "/s4.png",
      title: "Gaming Keyboard",
      category: "Keyboards"
    },
    {
      id: 5,
      image: "/s1.png", // يمكنك إضافة s5.png
      title: "Gaming Monitor",
      category: "Displays"
    }
  ];

  
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Collection</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Discover the latest gaming peripherals and accessories
          </p>
        </motion.div>

         {/* التخطيط الرئيسي - 3 أقسام */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  ">
           
          {/* القسم الأيسر - عمود من صورتين */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* الصورة العلوية */}
            <div 
              className="group cursor-pointer h-[48%]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <img
                  src={products[0].image}
                  alt={products[0].title}
                  className="w-full md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-blue-400">{products[0].category}</span>
                  <h4 className="text-sm font-bold mt-1">{products[0].title}</h4>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* الصورة السفلية */}
            <div 
              className="group cursor-pointer h-[48%]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 hover:border-red-400/50 transition-all duration-300">
                <img
                  src={products[1].image}
                  alt={products[1].title}
                  className="w-full md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-red-400">{products[1].category}</span>
                  <h4 className="text-sm font-bold mt-1">{products[1].title}</h4>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* القسم الأوسط - صورة كبيرة رئيسية */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 group cursor-pointer"
          >
            <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-white/10 hover:border-green-400/50 transition-all duration-300">
              <img
                src={"/s5.png"}
                alt={products[2].title}
                className="w-full md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-sm font-medium text-green-400">{products[2].category}</span>
                <h3 className="text-2xl font-bold mt-1">{products[2].title}</h3>
                <p className="text-gray-300 mt-2">Precision & Power</p>
              </div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* القسم الأيمن - عمود من صورتين */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* الصورة العلوية */}
            <div 
              className="group cursor-pointer h-[48%]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <img
                  src={products[3].image}
                  alt={products[3].title}
                  className="w-full md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-purple-400">{products[3].category}</span>
                  <h4 className="text-sm font-bold mt-1">{products[3].title}</h4>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* الصورة السفلية */}
            <div 
              className="group cursor-pointer h-[48%]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
                <img
                  src={products[4].image}
                  alt={products[4].title}
                  className="w-full md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-yellow-400">{products[4].category}</span>
                  <h4 className="text-sm font-bold mt-1">{products[4].title}</h4>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>

     
      </div>
    </div>
  );
};

export default ProductShowcase;
