"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import inventionsData from "../../inventionsData"
import "../../css/invention-page.css"

export default function InventionPage() {
  // Get route parameters using the useParams hook
  const { id } = useParams() as { id: string }

  const decodedId = decodeURIComponent(id)

  const allInventions = inventionsData.map(category => category.items.map(item => ({ ...item, category: category.category }))).flat()

  const invention = allInventions.find(item => item.name.en === decodedId || item.name.sv === decodedId)

  if (!invention) {
    return <p>Invention not found!</p>
  }

  return (
    <div className="invention-page-container">
      <div className="invention-page-content">
        {invention.category}
        <h1>
          {invention.name.en}
        </h1>
        {invention.description.en}
        <div className="invention-page-image-container">
          <Image src={invention.imageSrc} alt={invention.name.en} width={600} height={400} className="invention-page-image" />
        </div>
      </div>
      <div className="invention-page-meta">
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
