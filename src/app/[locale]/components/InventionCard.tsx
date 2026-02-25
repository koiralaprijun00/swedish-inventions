"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type InventionCardProps = {
  name: string
  inventorName?: string
  year?: string
  locale: string
  category?: string
  imageSrc?: string
  expanded?: boolean
  onToggle?: () => void
}

type Section = {
  title: string
  body: string
}

function splitMarkdownSections(md: string): Section[] {
  const sections: Section[] = []
  const parts = md.split(/^## /m)

  for (const part of parts) {
    const trimmed = part.trim()
    if (!trimmed) continue

    const newlineIdx = trimmed.indexOf("\n")
    if (newlineIdx === -1) {
      sections.push({ title: trimmed, body: "" })
    } else {
      sections.push({
        title: trimmed.slice(0, newlineIdx).trim(),
        body: trimmed.slice(newlineIdx + 1).trim(),
      })
    }
  }

  return sections
}

export default function InventionCard({
  name,
  inventorName,
  year,
  locale,
  category,
  imageSrc,
  expanded = false,
  onToggle = () => {},
}: InventionCardProps) {
  const [sections, setSections] = useState<Section[]>([])
  const [loading, setLoading] = useState(false)

  const normalizeFileName = (str: string) =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/ö/g, "o")
      .replace(/å/g, "a")
      .replace(/ä/g, "a")

  useEffect(() => {
    if (!expanded) return
    if (sections.length > 0) return

    setLoading(true)
    const fileName = normalizeFileName(name)

    fetch(`/content/${locale}/${fileName}.md`)
      .then((res) => (res.ok ? res.text() : ""))
      .then((text) => {
        if (text) {
          setSections(splitMarkdownSections(text))
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [expanded, name, locale, sections.length])

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
        <div className="expand-panel__scroll">
          {/* Info column */}
          <div className="expand-panel__col">
            <div className="expand-panel__info">
              <div>
                <div className="expand-panel__fact-label">Invention</div>
                <div className="expand-panel__fact-value">{name}</div>
              </div>
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
                  width={280}
                  height={140}
                  className="expand-panel__image"
                />
              )}
            </div>
          </div>

          {/* Content columns */}
          {loading && (
            <div className="expand-panel__col" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gray-400)", fontSize: "0.75rem" }}>
              Loading…
            </div>
          )}

          {sections.map((section, idx) => (
            <div key={idx} className="expand-panel__col">
              <div className="expand-panel__section-title">
                {section.title}
              </div>
              <div className="expand-panel__section-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {section.body}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}
