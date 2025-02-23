"use client"

import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import inventionsData from "../../../inventionsData"
import "../../../styles/invention-page.css"

export default function InventionPage() {
  const { locale, id } = useParams() as { locale: "en" | "sv"; id: string }
  const t = useTranslations("Translations")
  const decodedId = decodeURIComponent(id)

  const allInventions = inventionsData.flatMap(category => category.items.map(item => ({ ...item, category: category.category })))

  const invention = allInventions.find(item => [item.name.en.toLowerCase(), item.name.sv.toLowerCase()].includes(decodedId.toLowerCase()))

  if (!invention) {
    return (
      <p className="text-center text-red-500 font-bold">
        {t("inventionNotFound")}
      </p>
    )
  }

  return (
<<<<<<< Updated upstream
    <div className="flex justify-between p-4 gap-48">
      <div className="invention-page-content w-2/3 h-auto">
        <h1 className="text-3xl font-bold">
=======
    <div className="flex flex-col md:flex-row justify-between p-4 gap-2 md:gap-12">
      <div className="invention-page-content w-4/5 h-auto order-2 md:order-1">
        <h1 className="text-5xl mt-6 w-full font-bold text-primaryBlue">
>>>>>>> Stashed changes
          {invention.name[locale]}
        </h1>
        <p className="mt-2 w-full md:w-3/4">
          {invention.description[locale]}
        </p>
        <div className="mt-4">
          <Image
            src={invention.imageSrc || "/fallback-image.jpg"}
            alt={invention.name[locale]}
            width={600}
            height={400}
            className="w-full object-contain"
            onError={e => console.error("Image load error:", e)}
          />
        </div>
      </div>
      <div className="invention-page-meta w-1/3">
        <div className="mb-4">
          <strong>{t("inventor")}:</strong> {/* Translate "Inventor" */}
          <br />
          {invention.inventorName || t("unknown")} {/* Translate "Unknown" */}
        </div>
        <div>
          <strong>{t("category")}:</strong> {/* Translate "Category" */}
          <br />
          {t(`categories.${invention.category}`)} {/* Correctly translate the category */}
        </div>
      </div>
    </div>
  )
}
