import About from "@/components/About";
import Features from "@/components/Features";
import UploadFile from "@/components/UploadFile";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-balance text-center text-3xl p-6 font-bold sm:text-5xl">
          Comparte archivos de manera temporal
        </h1>
      </header>
      <main>
        <About />

        <UploadFile />

        <Features />
      </main>
    </>
  );
}
