"use client";

import { useState } from "react";
import { convertToUnits } from "../utils/format";
import { truncateString } from "../utils/string";
import ButtonUpload from "./ButtonUpload";
//import Modal from './Modal'
//import { addFile } from './Store/FileStore'
interface IFile {
  _id: string;
  name: string;
  size: string;
  url: string;
  permanent: boolean;
  private: boolean;
  createdAt: string;
  time: number;
  key: string;
}

const UploadFile = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<IFile | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fileU, setFileU] = useState<IFile | null>(null);

  const handleOpenModal = () => setIsOpen(!isOpen);

  const handleKeyPress = (e: KeyboardEvent) => {
    const key = e.key;
    if (key < "1" || key > "9") {
      e.preventDefault();
    }
  };

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    if (!file) {
      alert("No has seleccionado un archivo");
      return;
    }

    setLoading(true);
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        //addFile(data)
        setFileU(data);
        setFile(null);
        (e.currentTarget as HTMLFormElement)?.reset();
        handleOpenModal();
      });
  };

  return (
    <>
      <form
        className="mx-auto flex flex-col items-center justify-center md:mt-5 md:w-[900px]"
        //onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <div className="flex w-full flex-col items-center">
          <ButtonUpload setFile={setFile} file={file as IFile} />

          <div className="flex flex-col pb-3 md:flex-row md:gap-5">
            <div className="my-3">
              <label htmlFor="minutes">Tiempo: </label>
              <input
                min="1"
                max="60"
                defaultValue="1"
                className="w-11 rounded-md border-2 border-none border-b-white bg-neutral-700 text-center outline-none"
                type="number"
                name="minutes"
                id="minutes"
                //	onKeyPress={handleKeyPress}
                maxLength={3}
              />
              <span className="ml-1">min</span>
            </div>

            <div className="my-3 flex cursor-pointer items-center justify-center gap-2">
              <label htmlFor="private" className="cursor-pointer">
                Privado:
              </label>
              <input
                type="checkbox"
                name="privateFile"
                className="cursor-pointer"
                id="private"
              />
            </div>

            <div className="my-3 flex cursor-pointer items-center justify-center gap-2">
              <label htmlFor="permanent" className="cursor-pointer">
                Permanente:
              </label>
              <input
                type="checkbox"
                name="permanentFile"
                className="cursor-pointer"
                id="permanent"
              />
            </div>
          </div>
        </div>
        <div className={`flex items-center pb-3 ${!file && "hidden"}`}>
          {file && (
            <ul className="flex gap-5 pb-3">
              <li>
                <span className="mr-1 font-bold underline">Nombre:</span>
                {truncateString(file.name, 20, 20)}
              </li>
              <li>
                <span className="mr-1 font-bold underline">Tamaño:</span>
                {convertToUnits(Number(file.size))}
              </li>
              <li
                className="cursor-pointer uppercase text-red-500 hover:text-red-600"
                onClick={() => setFile(null)}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                  />
                </svg>
              </li>
            </ul>
          )}
        </div>
        <button
          className={`w-44 rounded-md bg-green-500 px-7 py-1 transition-all duration-300 ease-in-out hover:bg-green-600 ${
            loading && "hidden"
          }`}
          type="submit"
        >
          Subir archivo
        </button>
      </form>

      {/* {loading && (
				<div className="flex justify-center ">
					<div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-slate-300"></div>
				</div>
			)}

			<Modal isOpen={isOpen} onClose={handleOpenModal} file={fileU as IFile} /> */}
    </>
  );
};
export default UploadFile;
