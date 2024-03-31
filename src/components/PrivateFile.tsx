"use client";

import { TFile, TResponse } from "@/types/file";
import { useState } from "react";
import FileInfo from "./FileInfo";

const PrivateFile = ({ id }: { id: string }) => {
  const [file, setFile] = useState<TFile | null>(null);

  const getPrivateFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const key = formData.get("key") as string;

    const dataJson = JSON.stringify({ key: key });

    console.log(dataJson);

    const response: TResponse = await fetch(
      `${process.env.API_URI}/file/${id}`,
      {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: key }),
      },
    ).then((res) => res.json());

    const { data, message } = response;

    if (data) {
      setFile(data);
    } else {
      console.log(message);
    }
  };

  return (
    <>
      {!file && (
        <form
          onSubmit={getPrivateFile}
          className="mx-auto mt-7 flex w-[500px] flex-col items-center justify-center gap-4 rounded-lg bg-neutral-800 p-5 "
        >
          <label htmlFor="key" className="text-lg">
            Coloque la clave para desbloquear su archivo
          </label>
          <input
            className="w-[400px] p-2 text-center"
            id="key"
            type="password"
            name="key"
          />
          <button
            className="mt-2 inline-block rounded-md bg-green-500 px-5 py-1"
            type="submit"
          >
            Desbloquear
          </button>
        </form>
      )}

      {file && <FileInfo file={file} />}
    </>
  );
};

export default PrivateFile;
