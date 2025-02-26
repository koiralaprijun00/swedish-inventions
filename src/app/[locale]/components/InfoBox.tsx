"use client"
import React from "react"
import { useTranslations } from "next-intl"
import { Link } from "../../../i18n/routing"
import Image from "next/image"

interface InfoBoxProps {
  name: string;
  transparentImage: string;
  title: string;
  description: string;
  tags: string[];
  inventorName?: string;
  locale: string;
  isAboveFold?: boolean; // New prop
}

export default function InfoBox({ name, transparentImage, title, inventorName, locale, isAboveFold = true }: InfoBoxProps) {
  const t = useTranslations("Translations")
  const detailPageURL = `/invention/${encodeURIComponent(name)}`

  return (
    <div className="px-4 pt-4 w-full max-w-[600px] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col mb-4 sm:px-6 sm:pt-6 sm:mb-6">
      <h4 className="text-gray-700 text-xs sm:text-sm md:text-base">
        {inventorName || t("unknownInventor")}
      </h4>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
        {title}
      </h3>
      <div className="image-container overflow-hidden rounded-lg">
  <Image
    priority={isAboveFold} // Keep for above-the-fold images
    src={transparentImage}
    alt={title}
    width={150}
    height={250}
    className="mx-auto"
  />
</div>
      <div className="mt-3 sm:mt-4 mb-4 sm:mb-6 mr-4 flex justify-end">
        <Link
          href={detailPageURL}
          locale={locale}
          className="inline-flex items-center px-3 py-1 text-gray-700 text-xs sm:text-sm md:text-base sm:px-4 sm:py-2 rounded-lg bg-gray-200 hover:bg-primaryBlue hover:text-white transition-colors"
        >
          <span>
            {t("details")}
          </span>
          <span className="ml-1">+</span>
        </Link>
    </div>
    </div>
  )
}
