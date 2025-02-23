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
    <div className="category-filter">
      {categories.map(cat =>
        <button key={cat.key} onClick={() => onSelectCategory(cat.key)} className={`category-chip ${selectedCategory === cat.key ? "active" : ""}`}>
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
    { key: "designRetail", label: t("categories.designRetail") }
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
    <div className="mt-12">
    <Header />

      <div>
        <div className="flex justify-start gap-2 min-h-[50px]">
          <h2 className="text-2xl font-bold text-regalBlue">
            {t("categoryTitle")}
          </h2>
          <h2 className="text-2xl text-gray-400">
            {t("categorySubtitle")}
          </h2>
        </div>
        {/* Info Boxes */}
        <div className="flex gap-8 py-12 mb-8 justify-between">
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
        <div key={category.category} className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            {getLocalizedCategory(category.category)} {/* Localized category */}
          </h2>
          <div className="flex gap-12 flex-wrap">
            {category.items.map(item =>
              <InventionCard
                key={getLocalizedName(item)} // Use localized name as a key
                name={getLocalizedName(item)} // Pass localized name
                imageSrc={item.imageSrc}
                inventorName={item.inventorName}
                locale={locale}
              />
            )}
          </div>
        </div>
      )}
    </div>
    </>
  )
}
