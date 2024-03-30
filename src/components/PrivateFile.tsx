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
        <form onSubmit={getPrivateFile}>
          <input type="password" name="key" />
          <button type="submit">Submit</button>
        </form>
      )}

      {file && <FileInfo file={file} />}
    </>
  );
};

export default PrivateFile;
