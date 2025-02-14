"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import inventionsData from "../../../inventionsData"
import "../../../styles/invention-page.css"

export default function InventionPage() {
  // Get both locale and id from the URL
  const { locale, id } = useParams() as { locale: "en" | "sv"; id: string }
  const decodedId = decodeURIComponent(id)

  const allInventions = inventionsData.map(category => category.items.map(item => ({ ...item, category: category.category }))).flat()

  // Find the invention using either language's name
  const invention = allInventions.find(item => item.name.en === decodedId || item.name.sv === decodedId)

  if (!invention) {
    return <p>Invention not found!</p>
  }

  return (
    <div className="flex justify-between p-4 gap-48">
      <div className="invention-page-content w-2/3 h-auto">
        {invention.category}
        <h1>
          {invention.name[locale]}
        </h1>
        <p>
          {invention.description[locale]}
        </p>
        <div>
          <Image src={invention.imageSrc} alt={invention.name[locale]}  layout="intrinsic" width={600} height={100} className="w-full object-contain" />
        </div>
      </div>
      <div className="invention-page-meta w-1/3">
        <div>
          <strong>Inventor</strong>
          <br />
          {invention.inventorName || "Unknown"}
        </div>
        <div>
          <strong>Category</strong>
          <br />
          {invention.category}
        </div>
      </div>
    </div>
  )
}
