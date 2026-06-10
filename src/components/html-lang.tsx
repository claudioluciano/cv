"use client";

import { useEffect } from "react";

import type { Locale } from "@/data/resume-data";

interface HtmlLangProps {
  locale: Locale;
}

export function HtmlLang({ locale }: HtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
