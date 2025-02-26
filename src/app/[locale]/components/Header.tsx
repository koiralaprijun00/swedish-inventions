"use client"

import React, { memo } from "react"
import { useTranslations } from "next-intl"

const Header = memo(function Header() {
  const t = useTranslations("Translations")

  return (
    <header className="text-start mb-24 w-full max-w-5xl text-primaryBlue">
    <div className="py-2 md:py-8 text-left">
  <h1 className="prose text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
    {t("title")}{" "}
    <span
      className="prose font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005293] to-[#fecb00]"
    >
      {t("inventions")}
    </span>{" "}
    {t("and")}{" "}
    <span
      className="prose font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005293] to-[#fecb00]"
    >
      {t("innovations")}
    </span>
  </h1>
</div>

      <p className="prose text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
        {t("headerText")} <span className="bg-amber-300 p-1 md:p-2 text-primaryBlue font-bold leading-relaxed md:leading-loose">{t("peopleOfSweden")}</span>
      </p>
    </header>
  )
})

export default Header