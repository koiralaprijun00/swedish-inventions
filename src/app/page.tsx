'use client'

// import React, { useState } from "react"
// import inventionsData from "./inventionsData"
// import Image from "next/image"
// import "./styles/globals.css"
// import { useTranslations } from "next-intl"
// import { useParams } from "next/navigation"
// import { Link } from "../../src/i18n/routing"

// function InfoBox({
//   name,
//   transparentImage,
//   title,
//   inventorName
// }: {
//   name: string
//   inventorName?: string
//   transparentImage: string
//   title: string
//   description: string
//   tags: string[]
//   bgColor: string
// }) {

//   const t = useTranslations("Translations");

//   const detailPageURL = `/invention/${encodeURIComponent(name)}`

//   return (
//     <div className="px-4 w-[600px] h-[500px] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col">
//       <h4 className="text-gray-700 text-sm">
//         {inventorName || "Unknown"}
//       </h4>
//       <h3 className="text-xl font-semibold mb-2">
//       {String(title)}
//       </h3>

//       <div className="image-container w-full h-[300px] overflow-hidden rounded-lg flex-1">
//         <Image src={transparentImage} alt={title} width={600} height={250} className="scale-125 object-contain w-full h-full" />
//       </div>

//       <div className="mb-8 mr-4 flex justify-end">
//         <Link href={detailPageURL} passHref className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors">
//           <span>{t("details")}</span>
//           <span className="ml-1">+</span>
//         </Link>
//       </div>
//     </div>
//   )
// }

// function InventionCard({ name, imageSrc, inventorName }: { name: string; imageSrc: string; inventorName?: string }) {
//   const detailPageURL = `/invention/${encodeURIComponent(name)}`

//   return (
//     <Link href={detailPageURL} passHref>
//       <div
//         className="shadow-sm shadow-gray-50 cursor-pointer relative rounded-lg transition duration-500 ease-in-out transform hover:scale-105"
//         style={{
//           backgroundImage: `url(${imageSrc})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "420px",
//           width: "350px"
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-10 rounded-lg" />
//         <div className="relative z-10 text-white px-4 py-8">
//           <h3 className="font-bold text-xl text-white">
//             {name}
//           </h3>
//           <h4 className="text-white">
//             {inventorName || "Unknown"}
//           </h4>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // CategoryFilter Component
// function CategoryFilter({ categories, selectedCategory, onSelectCategory }: { categories: string[]; selectedCategory: string; onSelectCategory: (cat: string) => void }) {
//   return (
//     <div className="category-filter ">
//       {categories.map(cat =>
//         <button key={cat} onClick={() => onSelectCategory(cat)} className={`category-chip ${selectedCategory === cat ? "active" : ""}`}>
//           {cat}
//         </button>
//       )}
//     </div>
//   )
// }

// // Main Home Component
// export default function Home() {

//   const params = useParams();
//   const locale = Array.isArray(params?.locale) ? params.locale[0] : params?.locale || "en";
//   const t = useTranslations("Translations");

//   // Store the currently selected category
//   const [selectedCategory, setSelectedCategory] = useState<string>("All")

//   // Gather all unique categories from your inventionsData
//   const allCategories = ["All", ...Array.from(new Set(inventionsData.map(cat => cat.category)))]

//   // Filter the data based on selectedCategory
//   const filteredData = selectedCategory === "All" ? inventionsData : inventionsData.filter(cat => cat.category === selectedCategory)

//   return (
//     <div className="mt-12">
//       {/* Header */}
//       <header className="text-start mb-8 w-3/4">
//         <h1>
//           Famous Swedish{" "}
//           <span
//             className="bg-amber-300 p-2 text-regalBlue"
//             style={{
//               fontFamily: "Libre Franklin",
//               fontSize: "1.3em",
//               fontWeight: "1000"
//             }}
//           >
//             Inventions
//           </span>{" "}
//           and{" "}
//           <span
//             className="bg-amber-300 p-2 text-regalBlue"
//             style={{
//               fontFamily: "Libre Franklin",
//               fontSize: "1.3em",
//               fontWeight: "1000"
//             }}
//           >
//             Innovations
//           </span>
//         </h1>
//         <p className="text-gray-600 mt-12">
//           Discovering Sweden&#39;s Contributions to the World from the <span className="md:text-regalBlue md:font-bold p-2 bg-amber-300">People of Sweden.</span>
//         </p>
//       </header>

//       <div>
//         <div className="flex justify-start gap-2 min-h-[50px]">
//           <h2 className="text-2xl font-bold text-regalBlue">{t("categoryTitle")}</h2>
//           <h2 className="text-2xl text-gray-400">{t("categorySubtitle")}</h2>
//         </div>
//         {/* Info Boxes */}
//         <div className="flex gap-8 py-12 mb-8 justify-between">
//           {inventionsData.slice(0, 3).map((category, idx) =>
//             <InfoBox
//               key={idx}

//               name={category.items[0].name.en}
//               transparentImage={"transparentImage" in category.items[0] ? category.items[0].transparentImage || "" : ""}
//               title={typeof locale === 'string' && category.items[0].name && typeof category.items[0].name === 'object' ? (category.items[0].name as { [key: string]: string })[locale] : "Unknown"}
//               description={typeof category.items[0].description === "string" ? category.items[0].description : ""} // Ensure description is a string
//               inventorName={category.items[0].inventorName} // Pass inventorName
//               tags={[category.category, category.items[0].inventorName || "Unknown"]} // Correctly pass tags
//               bgColor={idx === 0 ? "#f8f9fa" : idx === 1 ? "#e9ecef" : "#dee2e6"}
//             />
//           )}
//         </div>
//       </div>

//       {/* Category Filter Chips */}
//       <CategoryFilter categories={allCategories} selectedCategory={selectedCategory} onSelectCategory={cat => setSelectedCategory(cat)} />

//       {/* Filtered Categories and Items */}
//       {filteredData.map(category =>
//         <div key={category.category} className="mb-8">
//           <h2 className="text-xl font-bold mb-4">
//             {category.category}
//           </h2>
//           <div className="flex gap-12 flex-wrap">

//             {category.items.map(item => <InventionCard key={item.name.en} name={(item.name as { [key: string]: string })[locale]} imageSrc={item.imageSrc} inventorName={item.inventorName} />)}

//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


export default function Home() {
  return <div>This is root Page.tsx. The main file is inside locale folder.</div>
}


