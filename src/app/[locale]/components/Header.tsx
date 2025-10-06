"use client"

import React, { memo } from "react"
import { useTranslations } from "next-intl"

const Header = memo(function Header() {
  const t = useTranslations("Translations")

  return (
    <header className="container swiss-section">
      <div className="swiss-grid swiss-grid--intro">
        <div className="col-span-2 md:col-span-1">
          <span className="swiss-tag">{t("title")}</span>
        </div>

        <div className="col-span-10 md:col-span-7">
          <h1 className="swiss-hero-heading">
            <span className="swiss-hero-heading__line">{t("peopleOfSweden")}</span>
            <span className="swiss-hero-heading__line swiss-hero-heading__line--accent">
              {t("inventions")}
            </span>
            <span className="swiss-hero-heading__line">{t("and")}</span>
            <span className="swiss-hero-heading__line swiss-hero-heading__line--accent">
              {t("innovations")}
            </span>
          </h1>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="swiss-meta-panel">
            <p className="swiss-meta-panel__lead">{t("headerText")}</p>
            <div className="swiss-meta-panel__grid">
              <div>
                <span className="swiss-meta-panel__label">Archive Volume</span>
                <span className="swiss-meta-panel__value">70+ entries</span>
              </div>
              <div>
                <span className="swiss-meta-panel__label">Time Span</span>
                <span className="swiss-meta-panel__value">1844 — 2024</span>
              </div>
              <div>
                <span className="swiss-meta-panel__label">Discipline</span>
                <span className="swiss-meta-panel__value">Science · Culture · Life</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Header