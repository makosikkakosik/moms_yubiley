import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Юлии 50 — приглашение на юбилей",
  description: "Приглашение на юбилей Юлии 29 августа в банкетном зале Argyn, Астана.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
