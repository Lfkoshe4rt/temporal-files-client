"use client";
import FileUploadLogic from "@/hooks/FileUploadLogic";
import { motion, AnimatePresence } from "framer-motion";

import FileControlButtons from "./FileControlButtons";
import FileOptions from "./FileOptions";
import Modal from "./Modal";
import ButtonUpload from "./UploadButton";

const variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 },
};

const UploadFile = () => {
  const {
    file,
    handleRemove,
    onSubmit,
    isOpen,
    toggleModal,
    prepareFile,
    setPrepareFile,
    loading,
  } = FileUploadLogic();

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <ButtonUpload
          setPrepareFile={setPrepareFile}
          prepareFile={prepareFile!}
        />{" "}
        <AnimatePresence>
          {prepareFile && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
              variants={variants}
              key="file-options"
            >
              <FileOptions file={prepareFile!} />
              <FileControlButtons
                handleRemove={handleRemove}
                loading={loading}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <Modal isOpen={isOpen} onClose={toggleModal} file={file!} />
    </div>
  );
};

export default UploadFile;
