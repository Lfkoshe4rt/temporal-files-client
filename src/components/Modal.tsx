"use client";

import { TModal } from "@/types/Modal";
import { useEffect } from "react";
import { convertToUnits } from "../utils/format";
import { truncateString } from "../utils/string";
//import Timer from "./Timer";

const Modal = ({ file, isOpen, onClose }: TModal) => {
  const handleCopy = () => {
    navigator.clipboard.writeText("http://localhost:4321/file?=" + file._id);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(file.key);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative z-20 w-[600px] rounded-md bg-neutral-800  dark:text-white">
        <div className="flex items-center justify-between px-3 py-1">
          <h1 className="text-lg font-bold uppercase text-green-500">
            Archivo subido correctamente
          </h1>
          <button
            onClick={onClose}
            className="p-2 text-xl font-bold hover:text-red-700"
          >
            X
          </button>
        </div>
        <div className="flex w-full items-center p-4">
          <ul className="w-full">
            <li className="my-2" title={file.name}>
              <strong className="pr-1 text-lg">Nombre:</strong>
              {truncateString(file?.name, 40, 40)}
            </li>

            <li className="my-2">
              <strong className="pr-1 text-lg">Tamaño:</strong>
              {convertToUnits(Number(file?.size))}
            </li>

            <li className="my-2">
              <strong className="pr-1 text-lg">Privado:</strong>
              {file.private ? "Si" : "No"}
            </li>

            {file.private && (
              <li className="my-2" title={file.key}>
                <strong className="pr-1 text-lg">Key:</strong>
                <span
                  onClick={handleCopyKey}
                  className="cursor-pointer text-green-400 hover:text-green-500"
                >
                  {file.key}
                </span>
              </li>
            )}

            <li className="my-2">
              <strong className="pr-1 text-lg">Permanente:</strong>
              {file.permanent ? "Si" : "No"}
            </li>

            <li className="my-2">
              <strong className="pr-1 text-lg">Subido:</strong>
              {new Date(file.createdAt).toLocaleDateString()}
            </li>

            {!file.permanent && (
              <li className="my-2">
                <strong className="pr-1 text-lg">Expira en:</strong>
                <span className="text-lg font-bold text-yellow-400">03:45</span>
                {/* <Timer
                  className="text-lg font-bold text-yellow-400"
                  time={time}
                  onFinish={onClose}
                /> */}
              </li>
            )}

            <li>
              <strong className="pr-1 text-lg">ID:</strong>
              <span className="text-gray-400">{file._id}</span>
            </li>

            <li className="mt-12 flex justify-end gap-3">
              <button
                className="rounded-sm bg-red-500 px-3 py-1 font-bold uppercase hover:bg-red-600"
                onClick={onClose}
              >
                Cerrar
              </button>
              <button
                className="rounded-sm bg-blue-500 px-3 py-1 font-bold uppercase hover:bg-blue-600"
                onClick={handleCopy}
              >
                Compartir
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
