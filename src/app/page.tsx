"use client"
import React, { useState } from "react"
import inventionsData from "./inventionsData"
import Image from "next/image"
import "./style.css"

// InfoBox Component
function InfoBox({ imageSrc, title, description, tags, bgColor }: { imageSrc: string; title: string; description: string; tags: string[]; bgColor: string }) {
  return (
    <div className="info-box shadow-md rounded-md p-4 hover:shadow-lg transition-shadow" style={{ backgroundColor: bgColor }}>
      <div className="image-container mb-3" style={{ width: "400px", height: "300px", overflow: "hidden" }}>
        <Image src={imageSrc} alt={title} width={400} height={200} className="rounded-md object-cover" />
      </div>
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">
        {description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, idx) =>
          <span key={idx} className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            {tag}
          </span>
        )}
      </div>
    </div>
  )
}

// InventionCard Component
interface InventionCardProps {
  name: string
  description: string | React.ReactNode
  imageSrc: string
  inventorName?: string
  onClick: () => void
}

function InventionCard({ name, imageSrc, inventorName, onClick }: InventionCardProps) {
  return (
    <div className="invention-card shadow-sm shadow-gray-50 border-solid border-2 hover:border-cyan-950 hover:border-2">
      <div className="invention-card-content">
        <Image src={imageSrc} alt={name} width={300} height={200} />
        <h3>
          {name}
        </h3>
        <h4>
          Inventor: {inventorName || " "}
        </h4>
      </div>
      <div className="two-links flex-column content-between">
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            onClick()
          }}
          className="right-arrow-button"
        >
          <Image src="/right-arrow.svg" alt="Go to another page" width={200} height={200} />
        </a>
      </div>
    </div>
  )
}

// CategoryFilter Component
function CategoryFilter({ categories, selectedCategory, onSelectCategory }: { categories: string[]; selectedCategory: string; onSelectCategory: (cat: string) => void }) {
  return (
    <div className="category-filter">
      {categories.map(cat =>
        <button key={cat} onClick={() => onSelectCategory(cat)} className={`category-chip ${selectedCategory === cat ? "active" : ""}`}>
          {cat}
        </button>
      )}
    </div>
  )
}

// Main Home Component
export default function Home() {
  // Store the currently selected category
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Gather all unique categories from your inventionsData
  const allCategories = ["All", ...Array.from(new Set(inventionsData.map(cat => cat.category)))]

  // Filter the data based on selectedCategory
  const filteredData = selectedCategory === "All" ? inventionsData : inventionsData.filter(cat => cat.category === selectedCategory)

  return (
    <div className="mt-24">
      {/* Header */}
      <header className="text-start mb-8">
        <h1>
          Famous Swedish{" "}
          <span
            className="bg-amber-300 p-2 text-regalBlue"
            style={{
              fontFamily: "Libre Franklin",
              fontSize: "1.3em",
              fontWeight: "1000"
            }}
          >
            Inventions
          </span>{" "}
          and{" "}
          <span
            className="bg-amber-300 p-2 text-regalBlue"
            style={{
              fontFamily: "Libre Franklin",
              fontSize: "1.3em",
              fontWeight: "1000"
            }}
          >
            Innovations
          </span>
        </h1>
        <p>
          Discovering Sweden&#39;s Contributions to the World from the <span className="md:text-regalBlue md:font-bold p-2 bg-amber-300">People of Sweden.</span>
        </p>
      </header>

      {/* Info Boxes */}
      <div className="info-boxes-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {inventionsData
          .slice(0, 3)
          .map((category, idx) =>
            <InfoBox
              key={idx}
              imageSrc={category.items[0].imageSrc}
              title={category.items[0].name}
              description={typeof category.items[0].description === "string" ? category.items[0].description : ""}
              tags={[category.category, category.items[0].inventorName || "Unknown"]}
              bgColor={idx === 0 ? "#f8f9fa" : idx === 1 ? "#e9ecef" : "#dee2e6"}
            />
          )}
      </div>

      {/* Category Filter Chips */}
      <CategoryFilter categories={allCategories} selectedCategory={selectedCategory} onSelectCategory={cat => setSelectedCategory(cat)} />

      {/* Filtered Categories and Items */}
      {filteredData.map(category =>
        <div key={category.category} className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.items.map(item =>
              <InventionCard
                key={item.name}
                name={item.name}
                description={typeof item.description === "string" ? item.description : ""}
                imageSrc={item.imageSrc}
                inventorName={item.inventorName}
                onClick={() => console.log(item.name)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
