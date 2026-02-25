"use client"

import React, { memo, useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const Header = memo(function Header() {
  const t = useTranslations("Translations")
  const [stockholmTime, setStockholmTime] = useState<string>("")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Stockholm"
    })

    const updateTime = () => setStockholmTime(formatter.format(new Date()))
    updateTime()

    const timer = window.setInterval(updateTime, 60_000)
    return () => window.clearInterval(timer)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead__row">
          <h1 className="masthead__title">
            {t("title")} {t("inventions")}
          </h1>
          <span className="masthead__meta">
            Stockholm {stockholmTime ? `${stockholmTime} CET` : ""}
          </span>
        </div>
        <p className="masthead__tagline">
          {t("categorySubtitle")}
          {" — "}
          Archive 1742–{currentYear}
        </p>
      </div>
    </header>
  )
})

export default Header
