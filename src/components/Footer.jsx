import { useTranslation } from "react-i18next";
// استيراد أيقونات FontAwesome
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer
      className="relative bg-dark-900 py-12 px-4 md:px-16 text-primary-600 overflow-hidden backdrop-blur-sm"
      style={{ backdropFilter: "blur(6px)" }}
    >
      {/* تأثير زجاجي */}
      <div
        className="absolute inset-0 bg-primary-600/5 rounded-3xl pointer-events-none"
        style={{ zIndex: 0 }}
      ></div>
      <div className="relative z-10  flex flex-col md:flex-row md:justify-between md:items-stretch gap-12">
        {/* Logo & Contact */}
        <div className="flex flex-col items-center md:items-start gap-4 min-w-[220px] bg-primary-600/10 rounded-2xl shadow-lg p-6 border border-primary-600/10 backdrop-blur-sm h-full">
          <div className=" py-2">
            <img
              src="/logo.png"
              alt="Al-Sandan Logo"
              className="h-24 object-contain rounded-lg "
            />
          </div>
          <div className="text-lg font-semibold tracking-wide text-neutral-50">
          {isArabic ? " ٠٧٥٠٠٠٧٨٨٧٤" : "07500078874"}
          </div>
          <div
            className="text-sm text-neutral-50 text-center md:text-left"
            dir={isArabic ? "rtl" : "ltr"}
          >
            <p className={`${isArabic ? "text-right" : "text-left"}`} dir={isArabic ? "rtl" : "ltr"}>
              {isArabic ? "اربيل/ شارع ١٢٠ متري/ مجمع المدينة الايطالية ٢/ قرب السوپر ماركت" : "Arbil/ 120 meters street/ Italian city complex 2/ Near Super market"}
            </p>
          </div>
          <a
            href={`mailto:${t("footer.contact.email")}`}
            className="text-sm text-neutral-50 hover:underline mt-1"
          >
            {t("footer.contact.email")}
          </a>
        </div>

        {/* About Section */}
        <div
          className="flex-1 min-w-[240px] bg-primary-600/10 rounded-2xl shadow-lg md:h-[284px] justify-center p-6 flex flex-col items-start gap-3 border border-primary-600/10 backdrop-blur-sm "
          dir={isArabic ? "rtl" : "ltr"}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              className="text-primary-300"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="currentColor"
                opacity="0.15"
              />
              <path
                d="M12 8v4m0 4h.01M12 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
                stroke="currentColor"
                className="text-neutral-50"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-2xl font-extrabold text-neutral-50 tracking-wide drop-shadow-sm">
              {t("footer.about.title")}
            </h3>
          </div>
          <p
            className="text-neutral-50 leading-relaxed text-justify text-base"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.08)" }}
          >
            {t("footer.about.description")}
          </p>
        </div>

        {/* Quick Links */}
        <div
          className="min-w-[200px] bg-primary-600/10 rounded-2xl shadow-lg p-6 flex flex-col items-start gap-3 border border-primary-600/10 backdrop-blur-sm h-full"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <div className="flex items-center gap-2 mb-2">
            <svg
              width="26"
              height="26"
              fill="none"
              viewBox="0 0 24 24"
              className="text-primary-300"
            >
              <rect x="4" y="6" width="16" height="2" rx="1" className="fill-neutral-50" />
              <rect
                x="4"
                y="11"
                width="16"
                height="2"
                rx="1"
                className="fill-neutral-50"
                opacity="0.7"
              />
              <rect
                x="4"
                y="16"
                width="16"
                height="2"
                rx="1"
                className="fill-neutral-50"
                opacity="0.4"
              />
            </svg>
            <h3 className="text-xl font-extrabold text-neutral-50 tracking-wide drop-shadow-sm">
              {t("footer.quickLinks.title")}
            </h3>
          </div>
          <ul className="flex flex-col text-neutral-50 gap-2  w-full mt-1">
            <li>
              <a
                href="/"
                className="block w-full rounded-lg px-3 py-2 font-medium transition bg-primary-600/10 hover:bg-neutral-50 hover:text-primary-600 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                {t("footer.quickLinks.home")}
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="block w-full rounded-lg px-3 py-2 font-medium transition bg-primary-600/10 hover:bg-neutral-50 hover:text-primary-600 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                {t("footer.quickLinks.products")}
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block w-full rounded-lg px-3 py-2 font-medium transition bg-primary-600/10 hover:bg-neutral-50 hover:text-primary-600 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                {t("footer.quickLinks.aboutUs")}
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block w-full rounded-lg px-3 py-2 font-medium transition bg-primary-600/10 hover:bg-neutral-50 hover:text-primary-600 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                {t("footer.quickLinks.contactUs")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-10 pt-6 border-t-2 border-primary-600 border-dashed flex flex-col md:flex-row items-center justify-between gap-2 text-md text-neutral-50">
        <p>{t("footer.copyright.rights")}</p>
        <p>{t("footer.copyright.company")}</p>
      </div>
    </footer>
  );
};

export default Footer;
