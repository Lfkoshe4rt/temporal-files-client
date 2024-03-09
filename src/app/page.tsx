import About from "@/components/About";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-balance text-center text-3xl p-6 font-bold sm:text-5xl">
          Comparte archivos de manera temporal
        </h1>
      </header>

      <About />
      <main></main>
      <Features />
    </>
  );
}
