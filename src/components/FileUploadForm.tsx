"use client";
import FileUploadLogic from "@/hooks/FileUploadLogic";
import FileDetails from "./FileDetails";
import FileUploadSection from "./FileUploadSection";
import UploadButton from "./UploadButton";
import Modal from "./Modal";

const FileUploadForm = () => {
  const { file, loading, setFile, onSubmit, toggleModal, isOpen } =
    FileUploadLogic();

  return (
    <>
      <form
        className="mx-auto flex flex-col items-center justify-center md:mt-5 md:w-[900px]"
        onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <FileUploadSection setFile={setFile} file={file!} />
        <FileDetails file={file!} setFile={setFile} />
        <UploadButton loading={loading} />
      </form>

      <Modal isOpen={isOpen} onClose={toggleModal} file={file!} />
    </>
  );
};
export default FileUploadForm;
