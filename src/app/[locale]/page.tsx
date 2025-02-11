"use client"

import { useTranslations } from "next-intl"
import { Link } from "../../i18n/routing"
import React, { useState } from "react"
import inventionsData from "../../../src/app/inventionsData.js"
import Image from "next/image"
import "../globals.css"

function InfoBox({
  name,
  transparentImage,
  title,
  inventorName,
  description,
  tags,
  bgColor
}: {
  name: string
  inventorName?: string
  transparentImage: string
  title: string
  description: string
  tags: string[]
  bgColor: string
}) {
  const t = useTranslations("Translations")
  const detailPageURL = `/invention/${encodeURIComponent(name)}`

  return (
    <div className="px-4 w-[600px] h-[500px] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col">
      <h4 className="text-gray-700 text-sm">
        {inventorName || t("unknownInventor")}
      </h4>
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <div className="image-container w-full h-[300px] overflow-hidden rounded-lg flex-1">
        <Image src={transparentImage} alt={title} width={600} height={250} className="scale-125 object-contain w-full h-full" />
      </div>
      <div className="mb-8 mr-4 flex justify-end">
        <Link href={detailPageURL} passHref className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors">
          <span>
            {t("details")}
          </span>
          <span className="ml-1">+</span>
        </Link>
      </div>
    </div>
  )
}

function InventionCard({ name, imageSrc, inventorName }: { name: string; imageSrc: string; inventorName?: string }) {
  const detailPageURL = `/invention/${encodeURIComponent(name)}`

  return (
    <Link href={detailPageURL} passHref>
      <div
        className="shadow-sm shadow-gray-50 cursor-pointer relative rounded-lg transition duration-500 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "420px",
          width: "350px"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-10 rounded-lg" />
        <div className="relative z-10 text-white px-4 py-8">
          <h3 className="font-bold text-xl">
            {name}
          </h3>
          <h4>
            {inventorName || "Unknown"}
          </h4>
        </div>
      </div>
    </Link>
  )
}

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

export default function Home() {
  const t = useTranslations("Translations")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

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

  // Use the mapping from JSON to get the key
  const getCategoryKey = (category: string) => t(`categories.mapping.${category}`)

  return (
    <div className="mt-12">
      <header className="text-start mb-8 w-3/4">
        <h1>
          {t("title")}{" "}
          <span className="bg-amber-300 px-2 py-4 text-regalBlue font-extrabold text-7xl">
            {t("inventions")}
          </span>{" "}
          {t("and")}{" "}
          </h1>
          <h1 className="inline-block bg-amber-300 px-2 py-4 text-regalBlue text-7xl">
            {t("innovations")}
          </h1>
        
        <p className="text-gray-600 mt-12">
          {t("headerText")} <span className="md:text-regalBlue md:font-bold p-2 bg-amber-300">{t("peopleOfSweden")}</span>
        </p>
      </header>

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
          {inventionsData.slice(0, 3).map((category, idx) =>
            <InfoBox
              key={idx}
              name={category.items[0].name}
              transparentImage={"transparentImage" in category.items[0] ? category.items[0].transparentImage || "" : ""}
              title={category.items[0].name}
              description={typeof category.items[0].description === "string" ? category.items[0].description : ""} // Ensure description is a string
              inventorName={category.items[0].inventorName} // Pass inventorName
              tags={[category.category, category.items[0].inventorName || "Unknown"]} // Correctly pass tags
              bgColor={idx === 0 ? "#f8f9fa" : idx === 1 ? "#e9ecef" : "#dee2e6"}
            />
          )}
        </div>
      </div>

      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

      {filteredData.map(category =>
        <div key={category.category} className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            {t(`categories.${getCategoryKey(category.category)}`)}
          </h2>
          <div className="flex gap-12 flex-wrap">
            {category.items.map(item => <InventionCard key={item.name} name={item.name} imageSrc={item.imageSrc} inventorName={item.inventorName} />)}
          </div>
        </div>
      )}
    </div>
  )
}
