import { MetadataRoute } from "next"
import inventionsData from "../app/inventionsData.js"

const locales = ["en", "sv"] // Available locales
const defaultLocale = "en" // Default locale

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://swedishinventions.com"

  // Collect all invention slugs
  const allInventions = inventionsData.flatMap(category =>
    category.items.map(item => ({
      slug: item.name.en.replace(/\s+/g, "-").toLowerCase(), // Convert name to slug
    }))
  )

  // Generate URLs for each locale
  const urls = allInventions.flatMap(({ slug }) =>
    locales.map(locale => ({
      url: `${baseUrl}/${locale}/invention/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
    }))
  )

  // Add homepage & static pages
  const staticUrls = locales.flatMap(locale => [
    { url: `${baseUrl}/${locale}`, lastModified: new Date().toISOString() },
  ])

  return [...urls, ...staticUrls]
}
