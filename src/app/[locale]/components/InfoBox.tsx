"use client"
import React from "react"
import { useTranslations } from "next-intl"
import { Link } from "../../../i18n/routing"
import Image from "next/image"

interface InfoBoxProps {
  name: string;
  transparentImage?: string;
  fallbackImage?: string;
  title: string;
  headline?: string;
  categoryLabel?: string;
  inventorName?: string;
  locale: string;
  isAboveFold?: boolean;
}

export default function InfoBox({
  name,
  transparentImage,
  fallbackImage,
  title,
  headline,
  categoryLabel,
  inventorName,
  locale,
  isAboveFold = true
}: InfoBoxProps) {
  const t = useTranslations("Translations")
  const detailPageURL = `/invention/${encodeURIComponent(name)}`
  const imageSrc = transparentImage || fallbackImage || ""
  const hasImage = Boolean(imageSrc)
  const inventorLabel = inventorName || t("unknownInventor")

  return (
    <Link href={detailPageURL} locale={locale} className="group block">
      <article className="swiss-feature-card">
        <div className="swiss-feature-card__body">
          <div className="swiss-feature-card__eyebrow">
            {categoryLabel && <span className="swiss-feature-card__pill">{categoryLabel}</span>}
            <span className="swiss-feature-card__label">
              {t("inventor")}: {inventorLabel}
            </span>
          </div>
          <h3 className="swiss-feature-card__title">{title}</h3>
          {headline && <p className="swiss-feature-card__headline">{headline}</p>}
          <span className="swiss-feature-card__cta">{t("details")} →</span>
        </div>

        <div className={`swiss-feature-card__image${hasImage ? "" : " swiss-feature-card__image--placeholder"}`}>
          {hasImage ? (
            <div className="swiss-feature-card__image-inner">
              <Image
                priority={isAboveFold}
                src={imageSrc}
                alt={title}
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-contain"
              />
            </div>
          ) : (
            <div className="swiss-feature-card__placeholder">
              <span>{t("featuredToday")}</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
