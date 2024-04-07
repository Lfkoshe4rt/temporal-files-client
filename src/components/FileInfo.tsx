"use client";

import Timer from "./Timer";
import { convertToUnits, formateDate } from "@/utils/format";
import { TFile } from "@/types/file";

const FileInfo = ({ file }: { file: TFile }) => {
  return (
    <div className="my-16 flex h-auto w-auto gap-3 rounded-md bg-neutral-800 p-5">
      <div>
        <div className="flex h-16 w-16 items-center justify-center rounded-md bg-neutral-700">
          <svg
            width="50"
            height="50"
            className="text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 18H17V16H7V18Z" fill="currentColor" />
            <path d="M17 14H7V12H17V14Z" fill="currentColor" />
            <path d="M7 10H11V8H7V10Z" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{file.name}</h1>

          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <p className="text-lg">
                Tamaño: {convertToUnits(Number(file.size))}
              </p>

              <p className="text-lg">
                Permanente : {file.permanent ? "Si" : "No"}
              </p>

              <p className="text-lg">Privado : {file.private ? "Si" : "No"}</p>

              {!file.permanent && (
                <p className="text-lg">
                  Expira en:{" "}
                  {
                    <Timer
                      createdAt={file.createdAt}
                      className="text-yellow-300"
                      min={file.time}
                    />
                  }
                  &nbsp;minutos
                </p>
              )}

              <p className="text-lg">
                Registrado el: {formateDate(file.createdAt)}
              </p>
            </div>
          </div>
        </div>
        <a
          href={`${process.env.API_URI}/download/${file._id}?key=${file.key}`}
          className="text-md flex items-center justify-center rounded bg-green-500 px-8 py-3 text-center font-bold text-white hover:bg-green-600"
        >
          Descargar
        </a>
      </div>
    </div>
  );
};

export default FileInfo;
