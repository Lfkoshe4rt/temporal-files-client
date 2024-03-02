import Header from "@/components/Header";
import Timer from "@/components/Timer";
import { TFile } from "@/types/file";
import { redirect } from "next/navigation";

import { convertToUnits } from "@/utils/format";

enum ErrorFile {
  NOT_FOUND = "File not found",
}

export default async function File({ params }: { params: { id: string } }) {
  const { id } = params;

  const data: TFile = await fetch(`${process.env.API_URI}/file/${id}`, {
    cache: "no-cache",
  }).then((res) => res.json());

  if (data.message == ErrorFile.NOT_FOUND) redirect("/");

  return (
    <>
      <Header />

      <main>
        <ul className="list-none">
          <li>
            id : <span>{data._id}</span>
          </li>
          <li>
            <h1>Nombre: {data.name}</h1>
          </li>
          <li>Tamaño: {convertToUnits(Number(data.size))}</li>
          <li>Permanente : {data.permanent ? "Si" : "No"}</li>
          <li>Privado : {data.private ? "Si" : "No"}</li>
          <li>Creado: {new Date(data.createdAt).toLocaleDateString()}</li>
          <li>
            <span>
              Expira en: {<Timer createdAt={data.createdAt} min={data.time} />}
              minutos
            </span>
          </li>
          <li>
            <a href={data.url} className="underline" download>
              Descargar
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
