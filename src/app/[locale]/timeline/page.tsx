"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import InteractiveTimeline from "../components/InteractiveTimeline";
import { Suspense } from "react";

export default function TimelinePage() {
  const { locale } = useParams() as { locale: string };
  const t = useTranslations("Translations");

  return (
    <Suspense fallback={<div className="text-center py-12">Loading timeline...</div>}>
      <InteractiveTimeline />
</Suspense>
  );
}