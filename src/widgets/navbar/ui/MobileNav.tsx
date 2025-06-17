"use client";
import { Sheet, SheetTitle, SheetHeader, SheetContent, SheetTrigger } from "@/shared/components";
import { Menu } from "lucide-react";
import { cn } from "@/shared";
import { LanguageSelect } from "./LanguageSelect";
import { getNavItems } from "../constants";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = ({ langPrefix }: { langPrefix: string }) => {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="p-2 rounded-lg bg-white shadow-md">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px]">
        <SheetHeader>
          <SheetTitle className="subhead-text mb-3">{t("navbar.menu")}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col text-lg gap-7 font-medium ml-auto">
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
      </SheetContent>
    </Sheet>
  );
};
