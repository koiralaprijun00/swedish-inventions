"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialShare from "../../components/SocialShare";
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
      const fileName = normalizeFileName(invention.name.en);

      try {
        const response = await fetch(`/content/${locale}/${fileName}.md`);
        if (response.ok) {
          const text = await response.text();
          setFullDescription(text);
        } else {
          setFullDescription("");
        }
      } catch {
        setFullDescription("");
      }
    };

    fetchFullDescription();
  }, [locale, decodedId, invention]);

  if (!invention) {
    return (
      <div className="container" style={{ padding: "4rem 0", textAlign: "center" }}>
        <p style={{ fontWeight: 600 }}>{t("inventionNotFound")}</p>
      </div>
    );
  }

  const renderedDescription = fullDescription ? (
    <div className="detail__content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {fullDescription}
      </ReactMarkdown>
    </div>
  ) : (
    <p className="detail__content">
      {invention.description[locale]}
    </p>
  );

  return (
    <section className="detail">
      <figure className="detail__hero">
        <Image
          src={invention.imageSrc || "/fallback-image.jpg"}
          alt={invention.name[locale]}
          fill
          className="object-cover"
          priority
        />
      </figure>

      <div className="container">
        <div className="detail__eyebrow">
          {invention.year && <span>{invention.year}</span>}
          <span>{t(`categories.${invention.category}`)}</span>
        </div>

        <h1 className="detail__title">
          {invention.oneLineHeading[locale]}
        </h1>

        <p className="detail__lede">
          {invention.description[locale]}
        </p>

        {currentUrl && (
          <div className="detail__share">
            <span>{t("share")}</span>
            <SocialShare url={currentUrl} title={invention.name[locale]} />
          </div>
        )}

        <div className="detail__layout">
          <div>
            {renderedDescription}
          </div>

          <aside className="detail__sidebar">
            <div className="detail__fact">
              <span className="detail__fact-label">{t("inventor")}</span>
              <span className="detail__fact-value">
                {invention.inventorName || t("unknown")}
              </span>
            </div>

            <hr className="detail__divider" />

            <div className="detail__fact">
              <span className="detail__fact-label">{t("category")}</span>
              <span className="detail__fact-value">
                {t(`categories.${invention.category}`)}
              </span>
            </div>

            {invention.year && (
              <>
                <hr className="detail__divider" />
                <div className="detail__fact">
                  <span className="detail__fact-label">Year</span>
                  <span className="detail__fact-value">{invention.year}</span>
                </div>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
