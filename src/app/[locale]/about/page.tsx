"use client"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations("Translations")

  return (
    <main className="mt-12">
      <p className="mb-6 w-full md:w-1/2 leading-8 text-gray-800 dark:text-white dark:!text-white">
        {t("aboutPage")}
      </p>
    </main>
  )
}