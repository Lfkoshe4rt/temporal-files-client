import Header from "@/components/Header";
import PrivateFile from "@/components/PrivateFile";
import { TResponse } from "@/types/file";
import FileInfo from "@/components/FileInfo";
import { redirect } from "next/navigation";

export default async function File({ params }: { params: { id: string } }) {
  const { id } = params;

  const errorHandlers: Record<string, () => Response> = {
    "File not found": () => redirect("/"),
    "Unauthorized access": () => redirect("/"),
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

      <main>{!data ? <PrivateFile id={id} /> : <FileInfo file={data} />}</main>
    </>
  );
}
