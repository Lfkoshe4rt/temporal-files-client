import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PreFooter from "@/components/PreFooter";

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
      <body className=" dark:text-white mx-auto h-screen p-6 md:w-[1400px]">
        <Header />
        {children}
        <PreFooter />
        <Footer />
      </body>
    </html>
  );
}
