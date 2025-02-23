"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { Link } from "../../../i18n/routing" // Adjust the import path as needed

type InventionCardProps = {
  name: string
  imageSrc: string
  inventorName?: string
  locale: string
}

export default function InventionCard({ name, imageSrc, inventorName, locale }: InventionCardProps) {
  const detailPageURL = `/invention/${encodeURIComponent(name)}`
  const t = useTranslations("Translations")

  return (
    <Link href={detailPageURL} locale={locale}>
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
