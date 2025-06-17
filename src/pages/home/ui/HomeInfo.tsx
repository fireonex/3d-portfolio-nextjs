"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { arrow } from "@/assets/icons";
import { tKeys } from "@/shared";
import { ReactElement } from "react";

type Props = {
  currentStage: number;
};

type InfoBoxProps = {
  text: string;
  link: string;
  lang: string;
  btnText: string;
};

const InfoBox = ({ text, link, lang, btnText }: InfoBoxProps) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link href={`/${lang}${link}`} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

export const HomeInfo = ({ currentStage }: Props) => {
  const { t } = useTranslation();
  const params = useParams();
  const lang = typeof params?.lang === "string" ? params.lang : "en";

  const renderContent: Record<number, ReactElement> = {
    1: (
      <InfoBox
        lang={lang}
        link="/about"
        text={t(tKeys.home.about.text)}
        btnText={t(tKeys.home.about.btnText)}
      />
    ),
    3: (
      <InfoBox
        lang={lang}
        link="/contact"
        text={t(tKeys.home.contact.text)}
        btnText={t(tKeys.home.contact.btnText)}
      />
    ),
    4: (
      <InfoBox
        lang={lang}
        link="/projects"
        text={t(tKeys.home.projects.text)}
        btnText={t(tKeys.home.projects.btnText)}
      />
    ),
    2: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        {t(tKeys.home.title.greetings)}
        <span className="font-semibold"> {t(tKeys.home.title.name)}</span>👋
        <br />
        {t(tKeys.home.title.profession)}
      </h1>
    ),
  };

  return renderContent[currentStage] || null;
};
