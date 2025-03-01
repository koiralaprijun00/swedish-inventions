"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import inventionsData from "../../inventionsData.js";

// Interface for timeline items structure
interface TimelineItem {
  id: number;
  year: number;
  name: {
    en: string;
    sv: string;
  };
  inventorName: string;
  description: {
    en: string;
    sv: string;
  };
  imageSrc: string;
  slug: string;
  century: string; // Add century property
}

const VerticalTimeline: React.FC = () => {
  const { locale } = useParams() as { locale: "en" | "sv" };
  const router = useRouter();
  const t = useTranslations("Translations");
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [filterCentury, setFilterCentury] = useState<string>("all");

  // Convert year to century string (e.g., 1742 -> "1700s")
  const getCenturyFromYear = (year: number): string => {
    // Get the century by taking the first two digits and adding 1 if needed
    const centuryNumber = Math.floor(year / 100);
    // Convert to format like "1700s"
    return `${centuryNumber}00s`;
  };

  // Process inventionsData to create timeline items on component mount
  useEffect(() => {
    // Collect all inventions from all categories
    const allInventions = inventionsData.flatMap(category => 
      category.items.map(item => {
        // Generate a slug from the English name
        const slug = item.name.en.replace(/\s+/g, "-").toLowerCase();
        
        // Only include items with known years
        if (item.year) {
          const century = getCenturyFromYear(item.year);
          return {
            id: item.id,
            year: item.year,
            name: item.name,
            inventorName: item.inventorName || "Unknown",
            description: item.description,
            imageSrc: item.imageSrc,
            slug: slug,
            century: century
          };
        }
        return null;
      }).filter(Boolean) // Remove null items (inventions without years)
    );
    
    // Sort chronologically
    const sortedItems = [...allInventions].sort((a, b) => {
      if (a && b) {
        return a.year - b.year;
      }
      return 0;
    });
    
    const validItems = sortedItems.filter(item => item !== null) as TimelineItem[];
    setTimelineData(validItems);

    // Log the items for debugging
    console.log("Timeline items:", validItems.map(item => ({
      year: item.year,
      century: item.century,
      name: item.name.en
    })));
  }, []);

  const handleNavigateToItem = (slug: string) => {
    router.push(`/${locale}/invention/${slug}`);
  };

  const filterByCentury = (century: string) => {
    setFilterCentury(century);
    console.log("Filtering by century:", century);
  };

  // Filter items based on selected century
  const filteredItems = filterCentury === "all"
    ? timelineData
    : timelineData.filter(item => item.century === filterCentury);

  // Get unique centuries from the timeline data
  const centuries = [
    "all",
    ...Array.from(new Set(timelineData.map(item => item.century)))
      .sort((a, b) => parseInt(a) - parseInt(b))
  ];

  // Debug: Log filtered items when they change
  useEffect(() => {
    console.log("Filtered items:", filteredItems.map(item => ({
      year: item.year,
      century: item.century,
      name: item.name.en
    })));
  }, [filteredItems]);

  return (
    <div className="my-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue mb-4">{t("timelineTitle")}</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">{t("timelineSubtitle")}</p>
        <p className="text-gray-600 mb-8  max-w-2xl mx-auto">{t("timelineDescription")}</p>
        
        
        {/* Century filter buttons - more minimal and modern */}
        <div className="inline-flex flex-wrap justify-center gap-1 p-1 bg-gray-50 rounded-full shadow-sm mb-16">
          {centuries.map(century => (
            <button
              key={century}
              onClick={() => filterByCentury(century)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 century-filter-button ${
                filterCentury === century
                  ? "bg-primaryBlue text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {century === "all" 
                ? t("allCenturies") 
                : century}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Timeline - more minimal and modern */}
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line"></div>
        
        {/* Timeline items */}
        <div className="space-y-20">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="relative group timeline-item">
              {/* Year marker - more minimal */}
              <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 z-10 transition-all duration-500 ${
                index % 2 === 0 ? "md:-translate-y-12" : "md:translate-y-4"
              }`}>
                <div className="bg-white text-primaryBlue text-sm font-mono font-bold py-1 px-4 rounded-full shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                  {item.year}
                </div>
              </div>
              
              {/* Content card - more minimal and modern */}
              <div className={`md:w-5/12 ${
                index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
              } pt-10`}>
                <div className="bg-white rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300 border border-gray-50 timeline-card">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.name[locale]}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      className="w-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-5 text-white">
                      <h3 className="text-xl font-bold leading-tight mb-1">{item.name[locale]}</h3>
                      <p className="text-sm text-gray-200">{item.inventorName}</p>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {item.description[locale]}
                    </p>
                    <button
                      onClick={() => handleNavigateToItem(item.slug)}
                      className="inline-flex items-center text-primaryBlue hover:text-blue-700 font-medium text-sm group-hover:underline transition-colors"
                    >
                      {t("learnMore")}
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Timeline dot - more minimal */}
              <div className="absolute left-8 md:left-1/2 top-0 transform md:-translate-x-1/2 timeline-dot">
                <div className="w-2.5 h-2.5 rounded-full bg-primaryBlue border-4 border-white shadow-inner group-hover:scale-125 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-100">
          <p className="text-gray-400">{t("noInventionsInCentury")}</p>
        </div>
      )}
    </div>
  );
};

export default VerticalTimeline;