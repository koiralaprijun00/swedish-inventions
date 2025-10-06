"use client"

import { useTranslations } from "next-intl"
import { useParams } from "next/navigation";
import Head from "next/head"
import React, { useState, Suspense } from "react"
import inventionsData from "../../../src/app/inventionsData.js"
import InfoBox from "./components/InfoBox";
import InventionCard from "./components/InventionCard";
import Header from "./components/Header";
import Link from "next/link"
import { useEffect } from "react"
import { usePathname, useSearchParams } from 'next/navigation';

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
    <div className="flex flex-wrap gap-2 mb-12">
      {categories.map(cat =>
       <button
       key={cat.key}
       onClick={() => onSelectCategory(cat.key)}
       className={`px-4 py-2 text-sm font-medium transition-colors ${
         selectedCategory === cat.key
           ? "bg-primary text-background"
           : "border border-border text-primary hover:bg-muted"
       }`}
     >
       {cat.label}
     </button>     
      )}
    </div>
  )
}

function HomeContent() {
  const { locale } = useParams() as { locale: string }
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("Translations")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // *** Construct the canonical URL ***
  const baseUrl = locale === "en" ? "https://swedishinventions.com" : `https://swedishinventions.com/${locale}`;
  const canonicalUrl = searchParams ? `${baseUrl}?${searchParams}` : baseUrl;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

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
      </Head>
    
    <Header />

    <main className="container py-8 w-full">
      {/* Featured Section */}
      <section className="space-section">
        <div className="grid grid-12">
          <div className="col-span-6">
            <div className="section-number">02</div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              {t("categoryTitle")}
            </h2>
            <p className="text-base text-secondary leading-relaxed">
              {t("categorySubtitle")}
            </p>
          </div>
          <div className="col-span-6">
            <div className="divider-line"></div>
            <div className="space-y-2">
              <div className="text-xs text-muted uppercase tracking-wide">
                Featured Inventions
              </div>
              <div className="text-sm text-secondary">
                Discover the most influential Swedish innovations that shaped our world
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Inventions Grid */}
        <div className="grid grid-12 mt-6">
          {inventionsData.slice(0, 3).map((category, idx) => (
            <div key={idx} className="col-span-4">
              <InfoBox
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
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="space-large">
        <div className="grid grid-12">
          <div className="col-span-3">
            <div className="section-number">03</div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Categories
            </h3>
          </div>
          <div className="col-span-9">
            <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          </div>
        </div>
      </section>

      {/* Inventions by Category */}
      <section className="space-section">
        <div className="space-y-8">
          {filteredData.map((category, categoryIdx) =>
            <div key={category.category}>
              <div className="grid grid-12 mb-4">
                <div className="col-span-1">
                  <div className="numbered-element">{categoryIdx + 1}</div>
                </div>
                <div className="col-span-11">
                  <h2 className="text-xl font-semibold text-primary mb-1">
                    {getLocalizedCategory(category.category)}
                  </h2>
                  <div className="divider-line"></div>
                </div>
              </div>
              
              {/* Multi-column responsive grid for inventions */}
              <div className="inventions-grid">
                {category.items.map(item =>
                  <InventionCard
                    key={getLocalizedName(item)}
                    name={getLocalizedName(item)}
                    imageSrc={item.imageSrc}
                    inventorName={item.inventorName}
                    year={item.year}
                    locale={locale}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
    
    </>
  )
}

export const dynamic = "force-static" // Ensure static prerendering

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primaryBlue"></div>
    </div>}>
      <HomeContent />
    </Suspense>
  )
}