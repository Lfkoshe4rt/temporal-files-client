"use client";
import FileUploadLogic from "@/hooks/FileUploadLogic";

import FileControlButtons from "./FileControlButtons";
import FileOptions from "./FileOptions";
import Modal from "./Modal";
import ButtonUpload from "./UploadButton";

const UploadFile = () => {
  const {
    file,
    handleRemove,
    onSubmit,
    isOpen,
    toggleModal,
    prepareFile,
    setPrepareFile,
  } = FileUploadLogic();

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <ButtonUpload
          setPrepareFile={setPrepareFile}
          prepareFile={prepareFile!}
        />
        {prepareFile && (
          <>
            <FileOptions file={prepareFile} />
            <FileControlButtons handleRemove={handleRemove} />
          </>
        )}
      </form>

      <Modal isOpen={isOpen} onClose={toggleModal} file={file!} />
    </div>
  );
};

export default UploadFile;
