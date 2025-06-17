"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { tKeys } from "@/shared";

export const CTA = () => {
  const { t } = useTranslation();
  const params = useParams();
  const lang = params.lang as string || "en";

  return (
    <section className="cta">
      <p className="cta-text">
        {t(tKeys.CTA.title1)} <br className="sm:block hidden" />
        {t(tKeys.CTA.title2)}
      </p>
      <Link className="btn" href={`/${lang}/contact`}>
        {t(tKeys.CTA.contact)}
      </Link>
    </section>
  );
};
