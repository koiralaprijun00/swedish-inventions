"use client"

import React from "react"
import inventionsData from "./inventionsData"
import Image from "next/image"
import "./style.css"

// Define types for the Section component props
interface SectionProps {
  title: string
  children: React.ReactNode
}

// Define the prop types for InventionCard
interface InventionCardProps {
  name: string
  description: string
  imageSrc: string
  link?: string
  inventorName?: string
}

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="text-start mb-8">
        <h1>
          Famous Swedish{" "}
          <span className="bg-amber-300 p-2 text-regalBlue" style={{ fontFamily: "Libre Franklin", fontSize: "1.3em", fontWeight: "1000" }}>
            Inventions
          </span>{" "}
          and{" "}
          <span className="bg-amber-300 p-2 text-regalBlue" style={{ fontFamily: "Libre Franklin", fontSize: "1.3em", fontWeight: "1000" }}>
            Innovations
          </span>
        </h1>
        <p>
          Discovering Sweden&#39;s Contributions to the World from the <span className="md:text-regalBlue md:font-bold p-2 bg-amber-300">People of Sweden.</span>
        </p>
      </header>

      {/* Main Content */}
      <main>
        {inventionsData.map((category, index) =>
          <Section key={index} title={category.category}>
            {category.items.map((item, idx) =>
              <InventionCard key={idx} name={item.name} description={item.description} imageSrc={item.imageSrc} link={item.link} inventorName={item.inventorName} />
            )}
          </Section>
        )}
      </main>
    </div>
  )
}

// Section Component
function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>
      <div className="grid-container">
        {children}
      </div>
    </section>
  )
}

// InventionCard Component
function InventionCard({ name, description, imageSrc, link, inventorName }: InventionCardProps) {
  const drawerId = `drawer-${name.replace(/\s/g, "-").toLowerCase()}`
  const backdropId = `backdrop-${name.replace(/\s/g, "-").toLowerCase()}`

  // Helper functions to open/close the drawer
  const openDrawer = () => {
    const drawer = document.getElementById(drawerId)
    const backdrop = document.getElementById(backdropId)
    if (drawer && backdrop) {
      drawer.style.transform = "translateX(0)" // Show the drawer
      backdrop.classList.remove("hidden") // Show the backdrop
    }
  }

  const closeDrawer = () => {
    const drawer = document.getElementById(drawerId)
    const backdrop = document.getElementById(backdropId)
    if (drawer && backdrop) {
      drawer.style.transform = "translateX(-100%)" // Hide the drawer
      backdrop.classList.add("hidden") // Hide the backdrop
    }
  }

  return (
    <div className="invention-card border-solid border-2  border-swedishYellow">
      {/* Left Section: Image and Text */}
      <div className="invention-card-content">
        <Image src={imageSrc} alt={name} width={300} height={200} className="rounded-md" />
        <h3>
          {name}
        </h3>
        <h4>
          Inventor: {inventorName || " "}
        </h4>
      </div>

      {/* Right Section: Wikipedia Logo Link */}
      <div className="two-links flex-column content-between">
        {/* Top Section: Wikipedia Link */}
        {link &&
          <a href={link} target="_blank" rel="noopener noreferrer" className="wikipedia-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg" alt="Wikipedia" />
          </a>}

        {/* Bottom Section: Right Arrow Button */}
        <a
          href="#"
          onClick={e => {
            e.preventDefault() // Prevent default navigation
            openDrawer()
          }}
          className="right-arrow-button"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
        >
          <img src="/right-arrow.svg" alt="Go to another page" />
        </a>

        {/* Backdrop: click outside to close */}
        <div
          id={backdropId}
          className="hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={e => {
            // Close the drawer only if user clicks on the backdrop itself,
            // not inside the drawer
            if (e.target === e.currentTarget) {
              closeDrawer()
            }
          }}
        />

        {/* The Drawer */}
        <div
          id={drawerId}
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
          aria-labelledby="drawer-label"
        >
          {/* Close Button */}
          <button type="button" className="mb-4 text-white bg-red-500 hover:bg-red-600 font-bold py-2 px-4 rounded" onClick={() => closeDrawer()}>
            Close
          </button>

          {/* Drawer Content: image, name, inventor, description */}
          <div className="flex flex-col items-center">
            <Image src={imageSrc} alt={name} width={300} height={200} className="rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-1">
              {name}
            </h3>
            <h4 className="text-sm text-gray-600 mb-2">
              Inventor: {inventorName || " "}
            </h4>
            <p className="text-sm text-gray-800">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
