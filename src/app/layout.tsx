import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maria | Frontend Developer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className="font-poppins">
    {children}
    </body>
    </html>
  );
}