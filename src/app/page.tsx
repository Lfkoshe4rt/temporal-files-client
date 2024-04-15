import About from "@/components/About";
import Features from "@/components/Features";
import UploadFile from "@/components/UploadFile";
import FAQsection from "@/components/FAQsection";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-balance p-6 text-center text-3xl font-bold sm:text-5xl">
          Comparte archivos de manera temporal
        </h1>
      </header>
      <About />
      <main>
        <UploadFile />
      </main>

      <FAQsection />
      <Features />
    </>
  );
}
