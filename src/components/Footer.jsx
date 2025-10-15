// استيراد أيقونات FontAwesome
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "/logo.png";

const Footer = () => {

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-16 px-4 md:px-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Information - Column 1 */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="شعار السندان" className="h-32 w-auto rounded-2xl shadow-2xl border-2 border-primary-500/20" />
            </div>
            <p className="text-base text-gray-200 text-center md:text-right font-medium leading-relaxed" dir="rtl">
              تغيير مفهوم العناية بالسمع مع متجرنا
            </p>
          </div>

          {/* Pages/Navigation - Column 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl text-center font-bold text-white mb-4 border-b-2 border-primary-500 pb-2 inline-block">
              الصفحات
            </h3>
            <a href="/" className="text-gray-200 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 font-medium text-lg">
              الرئيسية
            </a>
            <a href="/products" className="text-gray-200 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 font-medium text-lg">
              جميع المنتجات
            </a>
           
          </div>

          {/* Contact Information - Column 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl text-center font-bold text-white mb-4 border-b-2 border-primary-500 pb-2 inline-block">
              الاتصال
            </h3>
            <a href="tel:+9647750007083" className="flex items-center gap-3 text-gray-200 hover:text-primary-400 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <FaPhone className="text-primary-400 text-lg" />
              </div>
              <span className="font-medium text-lg">07750007083</span>
            </a>
            <a href="tel:+9647850007083" className="flex items-center gap-3 text-gray-200 hover:text-primary-400 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <FaPhone className="text-primary-400 text-lg" />
              </div>
              <span className="font-medium text-lg">07850007083</span>
            </a>
          </div>

          {/* Social Media - Column 4 */}
          <div className="flex  items-center flex-col space-y-4">
            <h3 className="text-xl font-bold text-white mb-4  border-b-2 border-primary-500 pb-2 inline-block">
              مواقع تواصل الاجتماعي
            </h3>
            <div className="flex items-center justify-center gap-4">
              
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-md">
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-md">
                <FaInstagram className="text-white text-lg" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-md">
                <FaTiktok className="text-white text-lg" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-md">
                <FaWhatsapp className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="border-t-2 border-primary-500/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-base text-gray-300 font-medium">
            <p>كل الحقوق محفوظة  لدى </p>
            <p className="text-primary-400 font-bold">
              شركة نصر للحاسبات
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
