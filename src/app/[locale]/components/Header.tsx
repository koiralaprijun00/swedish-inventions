"use client"

import React from "react"
import { useTranslations } from "next-intl"

export default function Header() {
  const t = useTranslations("Translations")

  return (
    <header className="text-start mb-8 w-full max-w-4xl">
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:leading-snug lg:leading-normal">
          {t("title")} <span className="bg-amber-300 px-2 py-1 md:px-3 md:py-2 text-regalBlue inline-block leading-tight md:leading-snug lg:leading-normal">
            {t("inventions")}
          </span>{" "}
          {t("and")}{" "}
          <span className="mt-2 md:mt-6 bg-amber-300 px-2 py-1 md:px-3 md:py-2 text-regalBlue inline-block leading-tight md:leading-snug lg:leading-normal">
            {t("innovations")}
          </span>
        </h1>
      </div>

      <p className="text-gray-600 mt-6 md:mt-10 lg:mt-12 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
        {t("headerText")} <span className="bg-amber-300 p-1 md:p-2 text-regalBlue font-bold leading-relaxed md:leading-loose">{t("peopleOfSweden")}</span>
      </p>
    </header>
  )
}
