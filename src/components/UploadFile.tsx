"use client";
import FileUploadLogic from "@/hooks/FileUploadLogic";

import ButtonUpload from "./UploadButton";
import FileOptions from "./FileOptions";
import FileControlButtons from "./FileControlButtons";
import Modal from "./Modal";
import { useEffect } from "react";

const UploadFile = () => {
  const { file, setFile, onSubmit, isOpen, toggleModal } = FileUploadLogic();

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <ButtonUpload file={file!} setFile={setFile} />
        {file && (
          <>
            <FileOptions file={file} />
            <FileControlButtons handleRemove={handleRemove} />
          </>
        )}
      </form>

      <Modal isOpen={isOpen} onClose={toggleModal} file={file} />
    </div>
  );
};

export default UploadFile;
