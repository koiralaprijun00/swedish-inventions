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
  isAboveFold?: boolean;
}

export default function InfoBox({ name, transparentImage, title, inventorName, locale, isAboveFold = true }: InfoBoxProps) {
  const t = useTranslations("Translations")
  const detailPageURL = `/invention/${encodeURIComponent(name)}`

  return (
    <Link href={detailPageURL} locale={locale} className="group block">
      <article className="swiss-feature-card">
        <div className="swiss-feature-card__body">
          <span className="swiss-feature-card__label">
            {inventorName || t("unknownInventor")}
          </span>
          <h3 className="swiss-feature-card__title">{title}</h3>
          <span className="swiss-feature-card__cta">{t("details")} →</span>
        </div>

        <div className="swiss-feature-card__image">
          <div className="swiss-feature-card__image-inner">
            <Image
              priority={isAboveFold}
              src={transparentImage}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </article>
    </Link>
  )
}
