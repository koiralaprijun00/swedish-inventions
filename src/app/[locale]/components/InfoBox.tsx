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
      <article className="border border-border bg-background hover:border-accent transition-all duration-200 h-full">
        <div className="grid grid-12 h-full">
          {/* Content */}
          <div className="col-span-8 p-4">
            <div className="space-y-2 h-full flex flex-col">
              <div className="space-y-1">
                <div className="text-xs text-muted uppercase tracking-wide">
                  {inventorName || t("unknownInventor")}
                </div>
                
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors leading-tight">
                  {title}
                </h3>
              </div>
              
              <div className="flex-1 flex items-center">
                <div className="text-xs text-secondary group-hover:text-accent transition-colors">
                  {t("details")} →
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="col-span-4 border-l border-border">
            <div className="aspect-square relative p-2">
              <Image
                priority={isAboveFold}
                src={transparentImage}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
