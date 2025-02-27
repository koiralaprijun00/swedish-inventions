"use client"

import { useTranslations } from "next-intl"
import { useParams, useSearchParams } from "next/navigation";
import Head from "next/head"
import React, { useState } from "react"
import inventionsData from "../../../src/app/inventionsData.js"
import InfoBox from "./components/InfoBox";
import InventionCard from "./components/InventionCard"; // Adjust the path as needed
import Header from "./components/Header"; // Adjust the path as needed
import Link from "next/link"

import "../styles/globals.css"

function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory
}: {
  categories: { key: string; label: string }[]
  selectedCategory: string
  onSelectCategory: (key: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-4 mt-8 mb-8">
      {categories.map(cat =>
       <button
       key={cat.key}
       onClick={() => onSelectCategory(cat.key)}
       className={`cursor-pointer outline-none border-0 rounded-[6px] px-6 py-2 text-[0.9rem] transition-colors duration-200 ease-in-out ${
         selectedCategory === cat.key
           ? "bg-primaryBlue text-white"
           : "bg-[#f1f1f1] text-[#0f3a56] hover:bg-primaryBlue hover:text-white"
       }`}
     >
       {cat.label}
     </button>     
      )}
    </div>
  )
}

export const dynamic = "force-static" // Ensure static prerendering

export default function Home() {
  const { locale } = useParams() as { locale: string }
  const searchParams = useSearchParams(); // Get search params
  const t = useTranslations("Translations")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // *** Construct the canonical URL ***
  const baseUrl = locale === "en" ? "https://swedishinventions.com" : `https://swedishinventions.com/${locale}`;
  const canonicalUrl = searchParams ? `${baseUrl}?${searchParams}` : baseUrl;

  // Helper function to get localized names (improved)
  const getLocalizedName = (item: any) => {
    if (typeof item.name === "string") {
      return item.name
    } else if (item.name && typeof item.name === "object") {
      return item.name[locale] || item.name.en || item.name.sv || "" // Fallback to en/sv
    }
    return ""
  }

  const categories = [
    { key: "all", label: t("categories.all", { fallback: "All" }) },
    { key: "foodBeverage", label: t("categories.foodBeverage") },
    { key: "engineeringTechnology", label: t("categories.engineeringTechnology") },
    { key: "digitalTechnology", label: t("categories.digitalTechnology") },
    { key: "gaming", label: t("categories.gaming") },
    { key: "scienceInnovation", label: t("categories.scienceInnovation") },
    { key: "artsCulture", label: t("categories.artsCulture") },
    
  ]

  const normalize = (str: string) => str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

  const filteredData = selectedCategory === "all" ? inventionsData : inventionsData.filter(cat => normalize(cat.category) === normalize(selectedCategory))

  // Localize category names (assuming you have translations for them)
  const getLocalizedCategory = (category: string) => {
    return t(`categories.${category}`)
  }
  return (
    <>
    <Head>
        <Link rel="canonical" href={canonicalUrl} key="canonical" />
        {/* other head elements */}
      </Head>
    <div className="mt-2 md:mt-12">
    <Header />

      <div>
        <div className="flex justify-start gap-2 min-h-[50px]">
          <h2 className="text-2xl font-bold text-primaryBlue">
            {t("categoryTitle")}
          </h2>
          <h2 className="text-2xl text-gray-400">
            {t("categorySubtitle")}
          </h2>
        </div>
        {/* Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center sm:justify-items-start">
        {inventionsData.slice(0, 3).map((category, idx) => (
  <InfoBox
    key={idx}
    name={getLocalizedName(category.items[0])}
    transparentImage={category.items[0].transparentImage || ""}
    title={getLocalizedName(category.items[0])}
    description={
      typeof category.items[0].description === "string"
        ? category.items[0].description
        : ""
    }
    inventorName={category.items[0].inventorName}
    tags={[category.category, category.items[0].inventorName || "Unknown"]}
    locale={locale}
  />
))}
        </div>
      </div>

      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

      {filteredData.map(category =>
        <div key={category.category} className="">
          <h2 className="text-xl font-bold mb-1 mt-8">
            {getLocalizedCategory(category.category)} {/* Localized category */}
          </h2>
          <div className="flex gap-4 flex-wrap w-full">
            {category.items.map(item =>
              <div key={getLocalizedName(item)} className="w-full md:w-[350px]"> {/* Use a key */}
              <InventionCard
                key={getLocalizedName(item)} // Use localized name as a key
                name={getLocalizedName(item)} // Pass localized name
                imageSrc={item.imageSrc}
                inventorName={item.inventorName}
                locale={locale}
              />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    
    </>
  )
}


