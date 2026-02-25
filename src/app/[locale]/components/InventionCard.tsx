"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { Link } from "../../../i18n/routing"

type InventionCardProps = {
  name: string
  inventorName?: string
  year?: string
  locale: string
}

export default function InventionCard({ name, inventorName, year, locale }: InventionCardProps) {
  const detailPageURL = `/invention/${encodeURIComponent(name)}`

  return (
    <Link href={detailPageURL} locale={locale} className="inv-row">
      <span className="inv-row__name">{name}</span>
      <span className="inv-row__meta">
        {year && <span>{year}</span>}
        {inventorName && <span>{inventorName}</span>}
        <span className="inv-row__arrow">→</span>
      </span>
    </Link>
  )
}
