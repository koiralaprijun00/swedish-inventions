"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import InteractiveTimeline from "../components/InteractiveTimeline";

export default function TimelinePage() {
  const { locale } = useParams() as { locale: string };
  const t = useTranslations("Translations");

  return (
    <div className="mt-8 mb-16">
      <InteractiveTimeline />
    </div>
  );
}