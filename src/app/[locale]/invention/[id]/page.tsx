"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialShare from "../../components/SocialShare"; // Adjust the import path as needed
import inventionsData from "../../../inventionsData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../../../styles/globals.css";

export default function InventionPage() {
  const { locale, id } = useParams() as { locale: "en" | "sv"; id: string };
  const t = useTranslations("Translations");
  const decodedId = decodeURIComponent(id);

  const allInventions = inventionsData.flatMap((category) =>
    category.items.map((item) => ({ ...item, category: category.category }))
  );

  const invention = allInventions.find((item) =>
    [item.name.en.toLowerCase(), item.name.sv.toLowerCase()].includes(
      decodedId.toLowerCase()
    )
  );

  const [currentUrl, setCurrentUrl] = useState("");
  const [fullDescription, setFullDescription] = useState<string>("");

  // Normalize file name (always based on English name since files use English naming)
  const normalizeFileName = (str: string) =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/ö/g, "o")
      .replace(/å/g, "a")
      .replace(/ä/g, "a");

  useEffect(() => {
    setCurrentUrl(window.location.href);

    const fetchFullDescription = async () => {
      if (!invention) return;

      // Always use the English name for the file name, regardless of locale
      const fileName = normalizeFileName(invention.name.en);

      try {
        const response = await fetch(`/content/${locale}/${fileName}.md`);
        console.log(`Fetching: /content/${locale}/${fileName}.md`); // Debugging
        if (response.ok) {
          const text = await response.text();
          setFullDescription(text);
        } else {
          console.error(`Full description file not found: /content/${locale}/${fileName}.md`);
          setFullDescription("");
        }
      } catch (error) {
        console.error("Error fetching full description:", error);
        setFullDescription("");
      }
    };

    fetchFullDescription();
  }, [locale, decodedId, invention]);

  if (!invention) {
    return (
      <p className="text-center text-red-500 font-bold">
        {t("inventionNotFound")}
      </p>
    );
  }

  const renderedDescription = fullDescription ? (
    <div className="swiss-invention__markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {fullDescription}
      </ReactMarkdown>
    </div>
  ) : (
    <p className="swiss-invention__summary">
      {invention.description[locale]}
    </p>
  );

  return (
    <section className="swiss-invention">
      <article className="swiss-invention__wrapper">
        <header className="swiss-invention__header">
          <div className="swiss-invention__eyebrow">
            {invention.year && (
              <span className="swiss-invention__year">{invention.year}</span>
            )}
            <span className="swiss-invention__category">
              {t(`categories.${invention.category}`)}
            </span>
          </div>
          <h1 className="swiss-invention__title">
            {invention.oneLineHeading[locale]}
          </h1>
          <p className="swiss-invention__lede">
            {invention.description[locale]}
          </p>
          {currentUrl && (
            <div className="swiss-invention__share">
              <span className="swiss-invention__share-label">
                {t("share")}
              </span>
              <SocialShare url={currentUrl} title={invention.name[locale]} />
            </div>
          )}
        </header>

        <figure className="swiss-invention__media">
          <Image
            src={invention.imageSrc || "/fallback-image.jpg"}
            alt={invention.name[locale]}
            fill
            className="swiss-invention__image"
          />
        </figure>

        <div className="swiss-invention__layout">
          <div className="swiss-invention__content">
            {renderedDescription}
          </div>

          <aside className="swiss-invention__sidebar">
            <div className="swiss-invention__fact">
              <span className="swiss-invention__fact-label">
                {t("inventor")}
              </span>
              <span className="swiss-invention__fact-value">
                {invention.inventorName || t("unknown")}
              </span>
            </div>

            <div className="swiss-invention__divider" aria-hidden="true" />

            <div className="swiss-invention__fact">
              <span className="swiss-invention__fact-label">
                {t("category")}
              </span>
              <span className="swiss-invention__fact-value">
                {t(`categories.${invention.category}`)}
              </span>
            </div>

            {invention.year && (
              <>
                <div className="swiss-invention__divider" aria-hidden="true" />
                <div className="swiss-invention__fact swiss-invention__fact--emphasis">
                  <span className="swiss-invention__fact-label">Year</span>
                  <span className="swiss-invention__fact-value">
                    {invention.year}
                  </span>
                </div>
              </>
            )}
          </aside>
        </div>
      </article>
    </section>
  );
}
