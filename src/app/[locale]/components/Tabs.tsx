"use client";

import React, { useState } from "react";
import inventionsData from "../../inventionsData";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface InventionItem {
  name: { [key: string]: string };
}

interface Category {
  category: string;
  items: InventionItem[];
}

const Tabs: React.FC = () => {
  const initialActiveCategory: Category = inventionsData.find(
    (category) => category.category === "foodBeverage"
  ) || inventionsData[0];

  const [activeTab, setActiveTab] = useState<Category>(initialActiveCategory);

  const { locale } = useParams() as { locale: string };
  const t = useTranslations("Translations");

  return (
    <div className="mb-16 w-full md:w-3/4"> {/* Adjusted margin for responsiveness */}
      <h2 className="text-md font-bold mt-16 mb-8">
        {t("exploreSwedishInventions")} {/* Added translation key */}
      </h2>
      <div className="text-sm flex border-b border-gray-300 overflow-x-auto whitespace-nowrap gap-4 md:gap-12"> {/* Adjusted gap for responsiveness */}
        {inventionsData.map((category) => (
          <div
            key={category.category}
            className={`px-0 pt-2 pb-4 ml-4 cursor-pointer ${
              activeTab === category ? "border-b-2 border-black font-bold" : ""
            }`}
            onClick={() => setActiveTab(category)}
          >
            {t(`categories.${category.category}`)}
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> {/* Adjusted gap for responsiveness */} 
  {activeTab.items &&
    activeTab.items.map((item, index) => (
      <div key={index}>
        <Link
          href={`/${locale}/invention/${encodeURIComponent(item.name.en)}`}
          className=" text-gray-600 hover:text-primaryBlue hover:font-bold transition-colors inline-block"
        >
          <h3>{item.name[locale] || item.name['en']}</h3>
        </Link>
      </div>
    ))}
</div>
    </div>
  );
};

export default Tabs;