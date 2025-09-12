import React from "react";
import {
  BarChart,
  Settings,
  Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/index.js";

const WorkingProcess = () => {
  const { t } = useTranslation();
  const IsArabic = i18n.language === "ar";
  const processSteps = t("workingProcess.steps", { returnObjects: true });

  return (
    <div className={`relative py-20 ${IsArabic ? "text-right" : "text-left"} px-4 bg-gradient-to-b from-[#0D0D0D] via-[#1a1a1a] to-[#8B6B73] md:px-10 overflow-hidden`}>
      {/* تأثيرات خلفية فخمة */}
      <div className="absolute inset-0 bg-[#C53C44]/5 rounded-3xl pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#C53C44]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#C53C44]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#C53C44]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Title Section المحسن */}
      <div className="text-center mb-20 relative z-10">
        <p className="text-[#C53C44] uppercase tracking-wider text-sm font-semibold mb-4">
          {t("workingProcess.section")}
        </p>
        <h2 className="text-6xl font-extrabold mt-2 pb-2 text-[#FBE7E8] tracking-wide drop-shadow-lg">
         {t("workingProcess.title")}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#C53C44] to-[#FBE7E8] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Timeline Steps المحسن */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#C53C44] to-[#FBE7E8] rounded-full"></div>
        
        {processSteps.map((step, index) => {
          // Assign icons based on index (same as before)
          let icon;
          if (index === 0) icon = <BarChart size={40} className="text-[#FBE7E8]" />;
          else if (index === 1) icon = <Settings size={40} className="text-[#FBE7E8]" />;
          else icon = <Wrench size={40} className="text-[#FBE7E8]" />;
          return (
            <div 
              key={index}
              className={`flex items-center gap-12 mb-20 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content المحسن */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="group hover:transform hover:scale-105 transition-all duration-300 bg-[#C53C44]/10 backdrop-blur-sm p-8 rounded-2xl border border-[#C53C44]/20 hover:bg-[#C53C44]/20 hover:border-[#C53C44]/40 hover:shadow-2xl hover:shadow-[#C53C44]/20">
                  <img src={step.image} alt="" className="w-full h-auto rounded-xl mb-4" />
                  <h3 className="text-3xl font-bold text-[#FBE7E8] my-4 group-hover:text-[#C53C44] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#FBE7E8]/80 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Icon المحسن */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#C53C44] to-[#FBE7E8] rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:rotate-12 shadow-2xl shadow-[#C53C44]/30">
                  {icon}
                </div>
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-7xl font-bold text-[#C53C44]/40">
                  {step.number}
                </div>
                {/* تأثير إضاءة إضافي */}
                <div className="absolute inset-0 w-20 h-20 bg-[#C53C44]/20 rounded-full blur-xl opacity-60 animate-pulse"></div>
              </div>

              {/* Empty div for layout */}
              <div className="flex-1"></div>
            </div>
          );
        })}
      </div>

      {/* تأثيرات إضافية في الأسفل */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#C53C44] to-transparent opacity-60"></div>
    </div>
  );
};

export default WorkingProcess;