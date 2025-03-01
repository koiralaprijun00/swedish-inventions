"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import QuizComponent from "../components/QuizInvention";
import Head from "next/head";

export default function QuizPage() {
  const { locale } = useParams() as { locale: string };
  const t = useTranslations("Translations");

  return (
    <>
      <Head>
        <title>
          {locale === "en"
            ? "Swedish Inventions Quiz - Test Your Knowledge"
            : "Quiz om Svenska Uppfinningar - Testa Dina Kunskaper"}
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Test your knowledge about famous Swedish inventions! Take our quiz and discover how much you know about Sweden's contributions to the world."
              : "Testa dina kunskaper om berömda svenska uppfinningar! Gör vårt quiz och upptäck hur mycket du vet om Sveriges bidrag till världen."
          }
        />
      </Head>

      <div className="flex  items-center mt-8 mb-16">
        <QuizComponent />
      </div>
    </>
  );
}