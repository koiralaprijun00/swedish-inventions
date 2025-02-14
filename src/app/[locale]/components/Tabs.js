'use client'

import React, { useState } from 'react';
import inventionsData from '../../inventionsData'; // Justera sökväg vid behov
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl'; // Importera useTranslations

const Tabs = () => {
  // Find the "foodBeverage" category object from inventionsData
  const initialActiveCategory = inventionsData.find(category => category.category === "foodBeverage");

  // Set the initial activeTab to the "foodBeverage" category object (or the first category if "foodBeverage" is not found)
  const [activeTab, setActiveTab] = useState(initialActiveCategory || inventionsData[0]);
  
  const { locale } = useParams();
  const t = useTranslations("Translations");

  return (
    <div className='mb-16'>
      <h2 className="text-md font-bold mt-16 mb-8">Explore swedishinventions.com</h2>
      <div className=" text-sm flex border-b border-gray-300 overflow-x-auto whitespace-nowrap gap-12">
        {inventionsData.map((category) => (
          <div
            key={category.category}
            className={`px-4 py-2 cursor-pointer ${
              activeTab === category ? 'border-b-2 border-black font-bold' : '' // Jämför nu med hela kategoriobjektet
            }`}
            onClick={() => setActiveTab(category)} // Sätt activeTab till hela kategoriobjektet
          >
            {t(`categories.${category.category}`)} {/* Använd t() för översatt kategorinamn */}
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-2">
        {inventionsData
          .find((category) => category === activeTab) // Jämför nu med hela kategoriobjektet
          ?.items.map((item, index) => (
            <div key={index} className="inline mr-[120px]">
              <Link
                key={index}
                href={`/${locale}/invention/${encodeURIComponent(item.name.en)}`}
                className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
              >
                <h3 className="inline">{item.name[locale]}</h3>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;