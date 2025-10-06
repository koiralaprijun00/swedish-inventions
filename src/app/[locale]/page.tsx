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
    <div className="swiss-filter">
      {categories.map((cat, index) => (
        <button
          type="button"
          key={cat.key}
          onClick={() => onSelectCategory(cat.key)}
          className={`swiss-filter__item ${
            selectedCategory === cat.key ? "swiss-filter__item--active" : ""
          }`}
        >
          <span className="swiss-filter__number">{String(index + 1).padStart(2, "0")}</span>
          <span className="swiss-filter__label">{cat.label}</span>
        </button>
      ))}
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
  const searchQuery = searchParams?.toString()
  const canonicalUrl = searchQuery ? `${baseUrl}?${searchQuery}` : baseUrl;

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
    { key: "artsCulture", label: t("categories.artsCulture") }
  ]

  const normalize = (str: string) => str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

  const filteredData = selectedCategory === "all" ? inventionsData : inventionsData.filter(cat => normalize(cat.category) === normalize(selectedCategory))

  const getLocalizedCategory = (category: string) => {
    return t(`categories.${category}`)
  }

  const getLocalizedCopy = (value: any) => {
    if (!value) return ""
    if (typeof value === "string") return value
    if (typeof value === "object") {
      return value[locale] || value.en || value.sv || ""
    }
    return ""
  }

  const featuredCandidates = inventionsData.flatMap(category =>
    category.items.map(item => ({
      ...item,
      category: category.category
    }))
  )

  const today = new Date()
  const startOfYear = new Date(today.getFullYear(), 0, 1)
  const dayIndex = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24))
  const featuredInvention = featuredCandidates.length
    ? featuredCandidates[dayIndex % featuredCandidates.length]
    : null
  const featuredName = featuredInvention ? getLocalizedName(featuredInvention) : ""
  const featuredHeadline = getLocalizedCopy(featuredInvention?.oneLineHeading)
  const featuredCategoryLabel = featuredInvention?.category ? getLocalizedCategory(featuredInvention.category) : ""
  return (
    <>
    <Head>
        <Link rel="canonical" href={canonicalUrl} key="canonical" />
      </Head>
    
    <Header />

    <main className="swiss-main">
      <section className="swiss-section container">
        <div className="swiss-grid swiss-section__heading">
          <div className="col-span-12 md:col-span-4">
            <span className="swiss-section__label">Featured</span>
            <h2 className="swiss-section__title">{t("categoryTitle")}</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="swiss-section__description">
              <p>{t("categorySubtitle")}</p>
              <p>Discover the most influential Swedish innovations that shaped our world.</p>
            </div>
          </div>
        </div>

        <div className="swiss-featured-grid">
          {inventionsData.slice(0, 3).map((category, idx) => (
            <InfoBox
              key={`${category.category}-${idx}`}
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
      </section>

      <section className="swiss-section container">
        <div className="swiss-grid swiss-section__heading">
          <div className="col-span-12 md:col-span-4">
            <span className="swiss-section__label">Catalogue</span>
            <h3 className="swiss-section__subtitle">Categories</h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          </div>
        </div>
      </section>

      <section className="swiss-section container">
        <div className="swiss-stack">
          {filteredData.map((category, categoryIdx) => (
            <div key={category.category} className="swiss-category-block">
              <div className="swiss-grid swiss-category-block__header">
                <div className="col-span-12 md:col-span-3">
                  <span className="swiss-category-block__index">{String(categoryIdx + 1).padStart(2, "0")}</span>
                  <span className="swiss-category-block__name">{getLocalizedCategory(category.category)}</span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="swiss-divider" aria-hidden="true" />
                </div>
              </div>

              <div className="swiss-catalog-grid">
                {category.items.map(item => (
                  <InventionCard
                    key={getLocalizedName(item)}
                    name={getLocalizedName(item)}
                    imageSrc={item.imageSrc}
                    inventorName={item.inventorName}
                    year={item.year}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          ))}
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