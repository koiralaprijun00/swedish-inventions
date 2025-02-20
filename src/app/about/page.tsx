'use client'

import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations("Translations")

  return (
    <main className="container mt-12 ">
      <p className="mb-6 w-1/2 text-gray-950 dark:text-white leading-8">
        {t("aboutPage")}
      </p>
    </main>
  )
}