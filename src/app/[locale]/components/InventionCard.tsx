"use client"

import React from "react"
import Image from "next/image"

type InventionCardProps = {
  name: string
  inventorName?: string
  year?: string
  locale: string
  category?: string
  imageSrc?: string
  description?: string
  summary?: string
  expanded?: boolean
  onToggle?: () => void
}

export default function InventionCard({
  name,
  inventorName,
  year,
  locale,
  category,
  imageSrc,
  description,
  summary,
  expanded = false,
  onToggle = () => {},
}: InventionCardProps) {
  return (
    <div className={expanded ? "inv-card--expanded" : ""}>
      <button
        type="button"
        onClick={onToggle}
        className={`inv-row ${expanded ? "inv-row--expanded" : ""}`}
      >
        <span className="inv-row__name">{name}</span>
        <span className="inv-row__meta">
          {year && <span>{year}</span>}
          {inventorName && <span>{inventorName}</span>}
          <span className="inv-row__arrow">{expanded ? "↓" : "→"}</span>
        </span>
      </button>

      <div className={`expand-panel ${expanded ? "expand-panel--open" : ""}`}>
        <div className="expand-panel__inner">
          <div className="expand-panel__layout">
            {/* Facts + Image column */}
            <div className="expand-panel__facts">
              {inventorName && (
                <div>
                  <div className="expand-panel__fact-label">Inventor</div>
                  <div className="expand-panel__fact-value">{inventorName}</div>
                </div>
              )}
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {year && (
                  <div>
                    <div className="expand-panel__fact-label">Year</div>
                    <div className="expand-panel__fact-value">{year}</div>
                  </div>
                )}
                {category && (
                  <div>
                    <div className="expand-panel__fact-label">Category</div>
                    <div className="expand-panel__fact-value">{category}</div>
                  </div>
                )}
              </div>
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={name}
                  width={320}
                  height={180}
                  className="expand-panel__image"
                />
              )}
            </div>

            {/* Description column */}
            <div className="expand-panel__desc">
              {summary && <p className="expand-panel__summary">{summary}</p>}
              {description && <p>{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
