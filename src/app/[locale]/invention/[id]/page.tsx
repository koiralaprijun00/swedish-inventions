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

  // Normalize the ID to match file naming convention (lowercase, hyphens)
  const normalizeFileName = (str: string) =>
    str.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    setCurrentUrl(window.location.href);

    const fetchFullDescription = async () => {
      const fileName = normalizeFileName(decodedId);
      try {
        const response = await fetch(`/content/${locale}/${fileName}.md`);
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
  }, [locale, decodedId]);

  if (!invention) {
    return (
      <p className="text-center text-red-500 font-bold">
        {t("inventionNotFound")}
      </p>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 gap-2 md:gap-12">
      <div className="invention-page-content w-full md:w-4/5 h-auto order-2 md:order-1">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-8">
          <h1 className="text-5xl mt-6 font-bold text-primaryBlue order-2 md:order-1">
            {invention.name[locale]}
          </h1>
          {currentUrl && (
            <div className="mt-4 order-2 md:order-1">
              <p className="text-gray-700 font-semibold mb-1 hidden md:block">
                {t("share")}
              </p>
              <SocialShare url={currentUrl} title={invention.name[locale]} />
            </div>
          )}
        </div>
        {/* Summary from inventionsData */}
        <p className="text-gray-700 mb-4">{invention.description[locale]}</p>
        <div className="mt-4">
          <div className="relative w-full h-48 md:h-96">
            <Image
              src={invention.imageSrc || "/fallback-image.jpg"}
              alt={invention.name[locale]}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Full Markdown description below the image */}
          {fullDescription && (
            <div className="prose prose-lg mt-6 text-gray-800 overflow-hidden">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {fullDescription}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
      <div className="border-0 md:border-l border-primaryBlue pl-0 md:pl-4 w-full md:w-1/5 invention-page-meta order-1 md:order-2 mt-4 md:mt-0">
        <div className="mb-4">
          <strong>{t("inventor")}</strong>
          <br />
          {invention.inventorName || t("unknown")}
        </div>
        <div>
          <strong>{t("category")}</strong>
          <br />
          {t(`categories.${invention.category}`)}
        </div>
      </div>
    </div>
  );
}