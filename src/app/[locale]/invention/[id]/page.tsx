"use client"

import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import inventionsData from "../../../inventionsData"

export default function InventionPage() {
  const { locale, id } = useParams() as { locale: "en" | "sv"; id: string }
  const t = useTranslations("Translations")
  const decodedId = decodeURIComponent(id)

  const allInventions = inventionsData.flatMap(category =>
    category.items.map(item => ({ ...item, category: category.category }))
  )

  const invention = allInventions.find(item =>
    [item.name.en.toLowerCase(), item.name.sv.toLowerCase()].includes(decodedId.toLowerCase())
  )

  if (!invention) {
    return (
      <p className="text-center text-red-500 font-bold">
        {t("inventionNotFound")}
      </p>
    )
  }

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 gap-2 md:gap-12">
      <div className="invention-page-content w-full md:w-4/5 h-auto order-2 md:order-1">
        <h1 className="text-5xl mt-6 font-bold text-primaryBlue">
          {invention.name[locale]}
        </h1>
        <p className="mt-2 w-full md:w-3/4">
          {invention.description[locale]}
        </p>
        <div className="mt-4 relative w-full h-48 md:h-96">
          <Image
            src={invention.imageSrc || "/fallback-image.jpg"}
            alt={invention.name[locale]}
            fill
            style={{ objectFit: 'cover' }} //  Use style prop
          />
        </div>
      </div>
      <div className="border-0 md:border-l border-primaryBlue pl-0 md:pl-4 w-full md:w-1/5 invention-page-meta order-1 md:order-2 mt-4 md:mt-0">
        <div className="mb-4">
          <strong>{t("inventor")}</strong>
          <br />
          {invention.inventorName || t("unknown")}
        </div>
        <div>
          <strong>{t("category")}</strong>
          <br />
          {t(`categories.${invention.category}`)}
        </div>
      </div>
    </div>
  )
}