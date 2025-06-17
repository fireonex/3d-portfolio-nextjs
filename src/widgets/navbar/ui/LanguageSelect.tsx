"use client";

import { useRouter, usePathname } from "next/navigation";
import { Select, SelectItem, SelectValue, SelectContent, SelectTrigger } from "@/shared/components";
import { cn } from "@/shared";
import { useMediaQuery } from "@/shared/utils";

type Language = "en" | "ru";

export const LanguageSelect = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLanguage = pathname.split("/")[1] as Language || "en";

  const changeLanguage = (lng: Language) => {
    const newPath = pathname.replace(/^\/(en|ru)/, `/${lng}`);
    router.push(newPath);
  };

  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return (
    <Select
      value={currentLanguage}
      onValueChange={(lng: Language) => changeLanguage(lng)}
    >
      <SelectTrigger
        className={cn(
          "w-[70px] text-lg font-medium text-black",
          isSmallScreen && "border-none outline-none shadow-none pl-0 pt-0 focus:ring-white",
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" className="text-base font-medium text-black">
          En
        </SelectItem>
        <SelectItem value="ru" className="text-base font-medium text-black">
          Ru
        </SelectItem>
      </SelectContent>
    </Select>
  );
};