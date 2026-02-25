"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import inventionsData from "../../../src/app/inventionsData.js";
import InventionCard from "./components/InventionCard";
import Header from "./components/Header";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import "../styles/globals.css";

function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: {
  categories: { key: string; label: string }[];
  selectedCategory: string;
  onSelectCategory: (key: string) => void;
}) {
  return (
    <div className="cat-filter">
      {categories.map((cat) => (
        <button
          type="button"
          key={cat.key}
          onClick={() => onSelectCategory(cat.key)}
          className={`cat-filter__btn ${
            selectedCategory === cat.key ? "cat-filter__btn--active" : ""
          }`}
          aria-pressed={selectedCategory === cat.key}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

function HomeContent() {
  const { locale } = useParams() as { locale: string };
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("Translations");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  const getLocalizedName = (item: any) => {
    if (typeof item.name === "string") return item.name;
    if (item.name && typeof item.name === "object") {
      return item.name[locale] || item.name.en || item.name.sv || "";
    }
    return "";
  };

  const categories = [
    { key: "all", label: t("categories.all", { fallback: "All" }) },
    { key: "foodBeverage", label: t("categories.foodBeverage") },
    { key: "engineeringTechnology", label: t("categories.engineeringTechnology") },
    { key: "digitalTechnology", label: t("categories.digitalTechnology") },
    { key: "artificialIntelligence", label: t("categories.artificialIntelligence") },
    { key: "gaming", label: t("categories.gaming") },
    { key: "scienceInnovation", label: t("categories.scienceInnovation") },
    { key: "artsCulture", label: t("categories.artsCulture") },
  ];

  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const filteredData =
    selectedCategory === "all"
      ? inventionsData
      : inventionsData.filter(
          (cat) => normalize(cat.category) === normalize(selectedCategory),
        );

  const getLocalizedCategory = (category: string) => {
    return t(`categories.${category}`);
  };

  return (
    <>
      <Header />

      <main className="main-content">
        <div className="container">
          <div className="home-layout">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <div>
              {filteredData.map((category, categoryIdx) => (
                <div key={category.category} className="cat-block">
                  <div className="cat-block__label">
                    <span className="cat-block__index">
                      {String(categoryIdx + 1).padStart(2, "0")}
                    </span>
                    <span className="cat-block__name">
                      {getLocalizedCategory(category.category)}
                    </span>
                  </div>

                  <div className="inv-grid">
                    {category.items.map((item) => (
                      <InventionCard
                        key={getLocalizedName(item)}
                        name={getLocalizedName(item)}
                        inventorName={item.inventorName}
                        year={item.year?.toString()}
                        locale={locale}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const dynamic = "force-static";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t border-b border-black"></div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
