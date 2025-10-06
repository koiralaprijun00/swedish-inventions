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

  return (
    <Link href={detailPageURL} locale={locale} className="group block">
      <article className="swiss-feature-card">
        <div className="swiss-feature-card__body">
          <header className="swiss-feature-card__header">
            <span className="swiss-feature-card__flag">{t("featuredToday")}</span>
            {categoryLabel && <span className="swiss-feature-card__meta">{categoryLabel}</span>}
          </header>

          <div className="swiss-feature-card__content">
            <p className="swiss-feature-card__inventor">
              {inventorName || t("unknownInventor")}
            </p>
            <h3 className="swiss-feature-card__title">{title}</h3>
            {headline && <p className="swiss-feature-card__headline">{headline}</p>}
          </div>

          <span className="swiss-feature-card__cta">{t("details")} →</span>
        </div>

        <div className="swiss-feature-card__image">
          <div className="swiss-feature-card__image-inner">
            {hasImage ? (
              <Image
                priority={isAboveFold}
                src={imageSrc}
                alt={title}
                fill
                className="object-contain"
              />
            ) : (
              <span className="swiss-feature-card__image-placeholder" aria-hidden="true" />
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
