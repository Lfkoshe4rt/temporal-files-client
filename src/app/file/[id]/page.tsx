import Header from "@/components/Header";
import PrivateFile from "@/components/PrivateFile";
import { TResponse } from "@/types/file";
import FileInfo from "@/components/FileInfo";
import { redirect } from "next/navigation";
import Features from "@/components/Features";

export default async function File({ params }: { params: { id: string } }) {
  const { id } = params;

  const errorHandlers: Record<string, () => Response> = {
    "File not found": () => redirect("/"),
    "File not found at path": () => redirect("/"),
  };

  const response: TResponse = await fetch(`${process.env.API_URI}/file/${id}`, {
    cache: "no-cache",
  }).then((res) => res.json());

  const { data, message } = response;

  const handler = errorHandlers[message];

  if (handler) {
    return handler();
  }

  return (
    <>
      <Header />

      <main className="">
        {!data ? <PrivateFile id={id} /> : <FileInfo file={data} />}

        <div className=" mt-16 flex items-center justify-center">
          <p className="text-md w-[700px] text-center text-lg ">
            ¡Gracias por utilizar nuestra página de subir archivos temporales!
            Apreciamos tu confianza en nosotros para manejar tus archivos de
            forma segura y eficiente.
          </p>
        </div>

        <Features />
      </main>
    </>
  );
}
