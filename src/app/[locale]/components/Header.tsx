"use client"

import React, { memo, useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "../../../i18n/routing"

const Header = memo(function Header() {
  const t = useTranslations("Translations")
  const [stockholmTime, setStockholmTime] = useState<string>("")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Europe/Stockholm"
    })

    const updateTime = () => setStockholmTime(formatter.format(new Date()))
    updateTime()

    const timer = window.setInterval(updateTime, 60_000)
    return () => window.clearInterval(timer)
  }, [])

  const heroLead = `${t("headerText")} ${t("peopleOfSweden")}`
  const heroTitle = `${t("title")} ${t("inventions")}`
  const currentYear = new Date().getFullYear()

  return (
    <header id="top" className="swiss-hero">
      <div className="container swiss-hero__inner">
        <div className="swiss-hero__layout">
          <div className="swiss-hero__col swiss-hero__col--intro">
            <span className="swiss-hero__micro">Swedish Inventions</span>
            <span className="swiss-hero__micro-sub">
              Archive 1844 — {currentYear}
            </span>
            <p className="swiss-hero__tagline">{t("categorySubtitle")}</p>
          </div>

          <div className="swiss-hero__col swiss-hero__col--main">
            <h1 className="swiss-hero__heading">{heroTitle}</h1>
            <p className="swiss-hero__lead">{heroLead}</p>
          </div>

          <div className="swiss-hero__col swiss-hero__col--meta">
            <div className="swiss-hero__meta-block">
              <span className="swiss-hero__meta-label">Stockholm, Sweden</span>
              <span className="swiss-hero__meta-value">
                {stockholmTime ? `${stockholmTime} (CET)` : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Header
