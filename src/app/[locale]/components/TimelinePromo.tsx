"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const TimelinePromo: React.FC = () => {
  const { locale } = useParams() as { locale: string };
  const router = useRouter();
  const t = useTranslations("Translations");

  const handleNavigate = () => {
    router.push(`/${locale}/timeline`);
  };

  return (
    <div className="my-16 px-4 max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-sm p-6 md:p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primaryBlue mb-2">{t("timelinePromoTitle")}</h2>
        <p className="text-gray-600 md:w-3/4 mx-auto">{t("timelinePromoSubtitle")}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {/* Simplified timeline with just four dots representing centuries */}
        <div className="relative w-full max-w-3xl mx-auto h-14 md:h-16">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 h-1 bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
          
          {/* Century dots */}
          <div className="absolute flex justify-between w-full">
            {/* 18th Century */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-900 rounded-full z-10 mb-1"></div>
              <span className="text-xs font-medium">{t("century18")}</span>
            </div>
            
            {/* 19th Century */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-700 rounded-full z-10 mb-1"></div>
              <span className="text-xs font-medium">{t("century19")}</span>
            </div>
            
            {/* 20th Century */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full z-10 mb-1"></div>
              <span className="text-xs font-medium">{t("century20")}</span>
            </div>
            
            {/* 21st Century */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-300 rounded-full z-10 mb-1"></div>
              <span className="text-xs font-medium">{t("century21")}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured inventions images */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
        <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/invention-images/celsius.webp" 
            alt="Celsius" 
            fill 
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/invention-images/wrench.webp" 
            alt="Adjustable Wrench" 
            fill 
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/invention-images/seatbelt.webp" 
            alt="Three-Point Seatbelt" 
            fill 
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/invention-images/spotify.webp" 
            alt="Spotify" 
            fill 
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleNavigate}
          className="bg-primaryBlue text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          {t("viewFullTimeline")}
        </button>
      </div>
    </div>
  );
};

export default TimelinePromo;