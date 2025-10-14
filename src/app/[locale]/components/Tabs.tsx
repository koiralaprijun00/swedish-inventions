"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import inventionsData from "../../inventionsData";

type InventionItem = {
  name: { [key: string]: string } | string;
  inventorName?: string;
  year?: number | string;
};

type Category = {
  category: string;
  items: InventionItem[];
};

const Tabs: React.FC = () => {
  const { locale } = useParams() as { locale: string };
  const t = useTranslations("Translations");

  const categories = useMemo(
    () =>
      inventionsData.map((category, index) => ({
        ...category,
        order: index + 1
      })),
    []
  );

  const [activeCategoryKey, setActiveCategoryKey] = useState<string>(
    categories[0]?.category ?? ""
  );

  const activeCategory: Category | undefined = categories.find(
    (category) => category.category === activeCategoryKey
  );

  const getLocalizedName = (item: InventionItem): string => {
    if (!item.name) return "";
    if (typeof item.name === "string") return item.name;
    return (
      item.name[locale] ||
      item.name.en ||
      item.name.sv ||
      Object.values(item.name)[0] ||
      ""
    );
  };

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="swiss-explore">
      <div className="container">
        <div className="swiss-explore__layout">
          <div className="swiss-explore__header">
            <span className="swiss-explore__eyebrow">{t("categoryTitle")}</span>
            <h2 className="swiss-explore__title">
              {t("exploreSwedishInventions")}
            </h2>
            <p className="swiss-explore__lead">
              {t("categorySubtitle")} {t("peopleOfSweden")}
            </p>
          </div>

          <div className="swiss-explore__content">
            <div
              className="swiss-explore__tabs"
              role="tablist"
              aria-label={t("exploreSwedishInventions")}
            >
              {categories.map((category) => {
                const isActive = category.category === activeCategoryKey;

                return (
                  <button
                    key={category.category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`swiss-explore-panel-${category.category}`}
                    className={`swiss-explore__tab ${
                      isActive ? "swiss-explore__tab--active" : ""
                    }`}
                    onClick={() => setActiveCategoryKey(category.category)}
                  >
                    <span className="swiss-explore__tab-label">
                      {t(`categories.${category.category}`)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="swiss-explore__divider" aria-hidden="true" />

            <div
              className="swiss-explore__list"
              id={`swiss-explore-panel-${activeCategory?.category ?? "all"}`}
              role="tabpanel"
              aria-live="polite"
            >
              {activeCategory?.items.slice(0, 12).map((item, index) => {
                const localizedName = getLocalizedName(item);
                const slug =
                  typeof item.name === "string"
                    ? item.name
                    : item.name?.en || localizedName;

                return (
                  <article
                    key={`${activeCategory?.category}-${localizedName}-${index}`}
                    className="swiss-explore__item"
                  >
                    <Link
                      href={`/${locale}/invention/${encodeURIComponent(
                        slug || ""
                      )}`}
                      className="swiss-explore__item-link"
                    >
                      {localizedName}
                    </Link>
                    <div className="swiss-explore__item-meta">
                      <span>{item.year ?? "—"}</span>
                      <span>{item.inventorName ?? t("unknownInventor")}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
