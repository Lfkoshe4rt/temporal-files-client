import Header from "@/components/Header";
import PrivateFile from "@/components/PrivateFile";
import { TResponse } from "@/types/file";
import FileInfo from "@/components/FileInfo";

export default async function File({ params }: { params: { id: string } }) {
  const { id } = params;

  const response: TResponse = await fetch(`${process.env.API_URI}/file/${id}`, {
    cache: "no-cache",
  }).then((res) => res.json());

  const { data, message } = response;

  return (
    <>
      <Header />

      <main>{!data ? <PrivateFile id={id} /> : <FileInfo file={data} />}</main>
    </>
  );
}
