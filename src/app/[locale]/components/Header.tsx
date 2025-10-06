"use client"

import React, { memo } from "react"
import { useTranslations } from "next-intl"

const Header = memo(function Header() {
  const t = useTranslations("Translations")

  return (
    <header className="container py-8 w-full">
      <div className="grid grid-12">
        <div className="col-span-8">
          <div className="section-number">01</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            {t("title")}{" "}
            <span className="text-accent">
              {t("inventions")}
            </span>{" "}
            {t("and")}{" "}
            <span className="text-accent">
              {t("innovations")}
            </span>
          </h1>
        </div>
        
        <div className="col-span-4">
          <div className="space-y-3">
            <div className="divider-line"></div>
            <p className="text-base text-secondary leading-relaxed">
              {t("headerText")}{" "}
              <span className="font-semibold text-primary">
                {t("peopleOfSweden")}
              </span>
            </p>
            <div className="flex space-x-4">
              <div className="text-xs text-muted uppercase tracking-wide">
                Discover
              </div>
              <div className="text-xs text-muted uppercase tracking-wide">
                Explore
              </div>
              <div className="text-xs text-muted uppercase tracking-wide">
                Learn
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Header