"use client"
import React, { useState } from "react"
import inventionsData from "./inventionsData"
import Image from "next/image"
import "./style.css"

// 1. Drawer component (define once)
function Drawer({
  isOpen,
  onClose,
  imageSrc,
  name,
  inventorName,
  description
}: {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  name?: string;
  inventorName?: string;
  description?: string;
}) {
  return (
    <>
      {/* Semi-Transparent Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        />
      )}
      <div
        className={`
          fixed top-0 right-0 z-40 h-screen px-12 pt-36 overflow-y-auto bg-white dark:bg-gray-800
          w-full sm:w-[40%]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 mb-4 text-white bg-red-500 hover:bg-red-600 font-bold py-2 px-4"
          onClick={onClose}
        >
          Close
        </button>

        {/* Drawer Content */}
        <div className="flex flex-col px-2">
          {/* Image Container */}
          {imageSrc && (
            <div className="drawer-image-container w-full mb-4">
              <Image
                src={imageSrc}
                alt={name ?? ""}
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <h3 className="text-lg font-semibold mb-1 text-regalBlue">{name}</h3>
          <h4 className="text-sm text-gray-600 mb-4">
            Inventor: <span className="font-medium">{inventorName || " "}</span>
          </h4>
          <p className="text-sm text-gray-800 leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

// 2. InventionCard - Just a simple card that calls parent’s openDrawer
interface InventionCardProps {
  name: string
  description: string
  imageSrc: string
  inventorName?: string
  onClick: () => void
}

function InventionCard({
  name,
  imageSrc,
  inventorName,
  onClick
}: InventionCardProps) {
  return (
    <div className="invention-card  shadow-sm shadow-gray-50 border-solid border-2 hover:border-cyan-950 hover:border-2">
      <div className="invention-card-content">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={200}
        />
        <h3>{name}</h3>
        <h4>Inventor: {inventorName || " "}</h4>
      </div>
      <div className="two-links flex-column content-between">
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            onClick()  // <--- Just call the parent’s function
          }}
          className="right-arrow-button"
        >
          <Image
            src="/right-arrow.svg"
            alt="Go to another page"
            width={200}
            height={200}
          />
        </a>
      </div>
    </div>
  )
}

// 3. Section Component
function Section({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid-container">{children}</div>
    </section>
  )
}

// -- NEW: A small CategoryFilter component for clickable chips --
function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`category-chip ${selectedCategory === cat ? "active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

// 4. Main Home component - Our single default export
export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<{
    name: string
    description: string
    imageSrc: string
    inventorName?: string
  } | null>(null)

   // -- NEW: We’ll store the currently selected category --
   const [selectedCategory, setSelectedCategory] = useState<string>("All")

   // 1. Gather all unique categories from your inventionsData
   //    (plus "All" at the start).
   const allCategories = ["All", ...inventionsData.map((cat) => cat.category)]
 
   // 2. Filter the data based on selectedCategory.
   //    If "All" is selected, show everything.
   const filteredData =
     selectedCategory === "All"
       ? inventionsData
       : inventionsData.filter(
           (cat) => cat.category === selectedCategory
         )

  const openDrawer = (item: {
    name: string
    description: string
    imageSrc: string
    inventorName?: string
  }) => {
    setSelectedItem(item)
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <div className="mt-24">
      {/* Header */}
      <header className="text-start mb-8">
        <h1>
          Famous Swedish{" "}
          <span
            className="bg-amber-300 p-2 text-regalBlue"
            style={{ fontFamily: "Libre Franklin", fontSize: "1.3em", fontWeight: 1000 }}
          >
            Inventions
          </span>{" "}
          and{" "}
          <span
            className="bg-amber-300 p-2 text-regalBlue"
            style={{ fontFamily: "Libre Franklin", fontSize: "1.3em", fontWeight: 1000 }}
          >
            Innovations
          </span>
        </h1>
        <p>
          Discovering Sweden&#39;s Contributions to the World from the{" "}
          <span className="md:text-regalBlue md:font-bold p-2 bg-amber-300">
            People of Sweden.
          </span>
        </p>
      </header>

      {/* NEW: Category Filter Chips (just below the heading) */}
      <CategoryFilter
        categories={Array.from(new Set(allCategories))}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* Main Content */}
      <main>
      {filteredData.map((category, index) => (
          <Section key={index} title={category.category}>
            {category.items.map((item, idx) => (
              <InventionCard
                key={idx}
                name={item.name}
                description={item.description}
                imageSrc={item.imageSrc}
                inventorName={item.inventorName}
                // Pass a function that sets the selected item and opens the drawer
                onClick={() => openDrawer(item)}
              />
            ))}
          </Section>
        ))}
      </main>

      {/* The shared Drawer (visible if drawerOpen === true) */}
      <Drawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        imageSrc={selectedItem?.imageSrc}
        name={selectedItem?.name}
        inventorName={selectedItem?.inventorName}
        description={selectedItem?.description}
      />
    </div>
  )
}
