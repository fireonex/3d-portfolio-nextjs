"use client";

import { cn } from "@/shared";
import { LanguageSelect } from "./LanguageSelect";
import { getNavItems } from "../constants";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopNav = ({ langPrefix }: { langPrefix: string }) => {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center text-base sm:text-lg gap-5 sm:gap-7 font-medium ml-auto">
      {navItems.map(({ path, label }) => {
        const isActive = pathname === `${langPrefix}${path}`;
        return (
          <Link
            key={path}
            href={`${langPrefix}${path}`}
            className={cn(isActive ? "text-blue-500" : "text-black")}
          >
            {label}
          </Link>
        );
      })}
      <LanguageSelect />
    </nav>
  );
};
