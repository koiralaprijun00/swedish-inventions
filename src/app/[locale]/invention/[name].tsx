"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import inventionsData from "../../inventionsData"
import "../../css/invention-page.css"
import { useTranslations } from "next-intl"

export default function InventionPage() {
  const { name, locale } = useParams() as { name: string; locale: string }
  const decodedName = decodeURIComponent(name)
  const t = useTranslations("Translations")

  const allInventions = inventionsData.map(category => category.items.map(item => ({ ...item, category: category.category }))).flat()

  // Helper function to get the localized name
  const getLocalizedName = (item: any) => {
    if (typeof item.name === "string") {
      return item.name
    } else if (item.name && typeof item.name === "object" && item.name[locale]) {
      return item.name[locale]
    }
    return "" // Return empty string if no localized name found
  }

  // Find the invention using the localized name
  const invention = allInventions.find(item => getLocalizedName(item) === decodedName)

  if (!invention) {
    return (
      <p>
        {t("inventionNotFound")}
      </p>
    ) // Use translation for "not found"
  }

  const getDescription = (invention: any) => {
    if (typeof invention.description === "string") {
      return invention.description
    } else if (invention.description && typeof invention.description === "object" && invention.description[locale]) {
      return invention.description[locale]
    }
    return t("noDescription")
  }

  // Use the existing getTitle function (no change needed here)
  const getTitle = (invention: any) => {
    if (typeof invention.name === "string") {
      return invention.name //return if not localized
    } else if (invention.name && typeof invention.name === "object" && invention.name[locale]) {
      return invention.name[locale] //return correct locale
    }
    return t("noTitle") // Fallback
  }
  // Helper function for localized category
  const getLocalizedCategory = (category: string) => {
    return t(`categories.${category}`) // Assuming you have translations for categories
  }
  return (
    <div className="invention-page-container">
      <div className="invention-page-content">
        {getLocalizedCategory(invention.category)}
        <h1>
          {getTitle(invention)}
        </h1>
        <p>
          {getDescription(invention)}
        </p>
        <div className="invention-page-image-container">
          <Image
            src={invention.imageSrc}
            alt={getTitle(invention)} // Use getTitle for alt text too
            width={600}
            height={400}
            className="invention-page-image"
          />
        </div>
      </div>
      <div className="invention-page-meta">
        <div>
          <strong>
            {t("inventor")}
          </strong>
          <br />
          {invention.inventorName || t("unknown")}
        </div>
        <div>
          <strong>{t("category")}</strong>
          <br />
          {getLocalizedCategory(invention.category)} {/* Localized category */}
        </div>
      </div>
    </div>
  )
}
