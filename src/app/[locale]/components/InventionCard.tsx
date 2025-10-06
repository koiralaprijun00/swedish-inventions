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
      <article className="border border-border bg-background hover:border-accent transition-all duration-200 h-full">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="aspect-square relative border-b border-border">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Text Content */}
          <div className="p-3 flex-1 flex flex-col">
            <div className="space-y-2 flex-1">
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors leading-tight">
                  {name}
                </h3>
                <div className="text-xs text-muted font-mono ml-2 flex-shrink-0">
                  {year}
                </div>
              </div>
              
              {inventorName && (
                <div className="space-y-1">
                  <div className="text-xs text-muted uppercase tracking-wide">
                    Inventor
                  </div>
                  <p className="text-xs text-secondary">
                    {inventorName}
                  </p>
                </div>
              )}
            </div>
            
            <div className="pt-2 mt-auto">
              <div className="text-xs text-muted group-hover:text-accent transition-colors">
                View details →
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
