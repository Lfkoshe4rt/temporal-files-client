import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Temporal Files",
  description: "Sube archivos temporales y compártelos con tus amigos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-neutral-900 dark:text-white">{children}</body>
    </html>
  );
}
