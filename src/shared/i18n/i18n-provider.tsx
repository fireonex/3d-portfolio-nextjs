'use client';

import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';

export function I18nProvider({
                               i18n,
                               children,
                             }: {
  i18n: any;
  children: ReactNode;
}) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}