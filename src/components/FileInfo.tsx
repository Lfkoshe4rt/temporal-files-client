"use client";

import Timer from "./Timer";
import { convertToUnits } from "@/utils/format";
import { TFile } from "@/types/file";

const FileInfo = ({ file }: { file: TFile }) => {
  return (
    <ul className="list-none">
      <li>
        id : <span>{file._id}</span>
      </li>
      <li>
        <h1>Nombre: {file.name}</h1>
      </li>
      <li>Tamaño: {convertToUnits(Number(file.size))}</li>
      <li>Permanente : {file.permanent ? "Si" : "No"}</li>
      <li>Privado : {file.private ? "Si" : "No"}</li>
      <li>Creado: {new Date(file.createdAt).toLocaleDateString()}</li>
      <li>
        <span>
          Expira en:{" "}
          {
            <Timer
              createdAt={file.createdAt}
              className="text-yellow-300"
              min={file.time}
            />
          }
          minutos
        </span>
      </li>
      <li>
        <a href={file.url} className="underline" download>
          Descargar
        </a>
      </li>
    </ul>
  );
};

export default FileInfo;
