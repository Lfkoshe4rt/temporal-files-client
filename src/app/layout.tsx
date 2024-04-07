import Footer from "@/components/Footer";
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
    <html lang="es" className="bg-neutral-900">
      <body className=" mx-auto flex min-h-screen flex-col  md:w-[1400px]  dark:text-white">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
