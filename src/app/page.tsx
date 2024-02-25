import Header from "@/components/Header";
import UploadFile from "@/components/UploadFile";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto h-screen p-6 md:w-[1400px]">
      <Header />
      <UploadFile />
      <PreFooter />
      <Footer />
    </main>
  );
}
