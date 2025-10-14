"use client"

import React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "../../../i18n/routing"

type InventionCardProps = {
  name: string
  imageSrc: string
  inventorName?: string
  year?: string
  locale: string
}

export default function InventionCard({ name, imageSrc, inventorName, year, locale }: InventionCardProps) {
  const detailPageURL = `/invention/${encodeURIComponent(name)}`
  const t = useTranslations("Translations")

  return (
    <Link href={detailPageURL} locale={locale} className="group block">
      <article className="swiss-tile">
        <header className="swiss-tile__header">
          <span className="swiss-tile__eyebrow">{year || "—"}</span>
        </header>

        <div className="swiss-tile__image">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="swiss-tile__body">
          <h3 className="swiss-tile__title">{name}</h3>
          {inventorName && (
            <div className="swiss-tile__meta">
              <span className="swiss-tile__meta-value">{inventorName}</span>
            </div>
          )}
        </div>

        <footer className="swiss-tile__footer">{t("details")} →</footer>
      </article>
    </Link>
  )
}
