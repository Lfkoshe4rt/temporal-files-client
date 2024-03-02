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
      <body className=" dark:text-white mx-auto h-screen  md:w-[1400px]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
