"use client";

import { TFile, TResponse } from "@/types/file";
import { useState } from "react";
import FileInfo from "@/components/FileInfo";
import ButtonKey from "@/components/ButtonKey";

const messages: { [key: string]: string } = {
  "File not found": "Archivo no encontrado",
  "File not found at path": "Archivo no encontrado en la ruta",
  "Unauthorized access": "Clave incorrecta",
};

const PrivateFile = ({ id }: { id: string }) => {
  const [file, setFile] = useState<TFile | null>(null);
  const [message, setMessage] = useState<string>("");

  const resetForm = (form: HTMLFormElement) => {
    if (message) {
      form.reset();
      setMessage("");
    }
  };

  const getPrivateFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const key = formData.get("key") as string;

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

    if (!data) {
      setMessage(message);
    }

    setFile(data);
  };

  return (
    <>
      {!file && (
        <form
          onClick={(e) => resetForm(e.currentTarget)}
          onSubmit={getPrivateFile}
          className="mx-auto mt-8 flex w-[300px] flex-col items-center justify-center gap-4 rounded-lg bg-neutral-800 p-5 text-center sm:w-[500px] sm:text-left "
        >
          <label htmlFor="key" className="text-lg">
            Coloque la clave para desbloquear su archivo
          </label>
          <div className="flex flex-col items-end gap-2">
            <input
              className="w-full p-2 text-center sm:w-[400px]"
              id="key"
              type="password"
              name="key"
              required
            />
            <span className=" font-bold text-red-600">{messages[message]}</span>
          </div>
          <button
            className="mt-2 inline-block rounded-md bg-green-500 px-5 py-1"
            type="submit"
          >
            Desbloquear
          </button>
        </form>
      )}

      {file && (
        <>
          <FileInfo file={file} />
          <ButtonKey fileKey={file.key} />
        </>
      )}
    </>
  );
};

export default PrivateFile;
