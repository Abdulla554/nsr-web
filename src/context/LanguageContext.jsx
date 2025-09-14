import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("ar");

  const getLanguageLabel = (currentLang) => {
    if (currentLang === "en") {
      return "عربي";
    } else {
      return "English";
    }
  };
  // lib axios.jsx

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.className =
      language === "ar" ? "direction-rtl" : "direction-ltr";
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        languageLabel: getLanguageLabel(language),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
