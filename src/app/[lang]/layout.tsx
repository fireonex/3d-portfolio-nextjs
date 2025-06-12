import { Footer, Navbar } from "@/widgets";
import { I18nProvider, initI18nServer } from "@/shared/i18n";
import { useTranslation } from "@/shared/i18n/client";

export default async function LangLayout({
                                           children,
                                           params: { lang },
                                         }: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  const i18n = await initI18nServer(lang);

  return (
    <I18nProvider i18n={i18n}>
      <ClientWrapper lang={lang}>
        <Navbar />
        <main className="bg-slate-300/20 min-h-screen">
          {children}
        </main>
        <Footer />
      </ClientWrapper>
    </I18nProvider>
  );
}

function ClientWrapper({
                         lang,
                         children,
                       }: {
  lang: string;
  children: React.ReactNode;
}) {
  "use client";
  const { i18n } = useTranslation();
  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }

  return <>{children}</>;
}