"use client";
import FileUploadLogic from "@/hooks/FileUploadLogic";

import ButtonUpload from "./UploadButton";
import FileOptions from "./FileOptions";
import FileControlButtons from "./FileControlButtons";

const UploadFile = () => {
  const { file, setFile, onSubmit } = FileUploadLogic();

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <div className=" flex justify-center items-center flex-col">
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <ButtonUpload file={file!} setFile={setFile} />
        {file && (
          <>
            <FileOptions file={file} />
            <FileControlButtons handleRemove={handleRemove} />
          </>
        )}
      </form>
    </div>
  );
};

export default UploadFile;
