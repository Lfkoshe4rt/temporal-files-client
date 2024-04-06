import { TFile } from "@/types/file";
import { useState } from "react";
import { persistSessionStorage } from "./persistSessionStorage";

const FileUploadLogic = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<TFile | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [prepareFile, setPrepareFile] = useState<File | null>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setPrepareFile(null);
  };

  const handleRemove = () => {
    setPrepareFile(null);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.append("file", prepareFile!);

    setLoading(true);

    fetch(`${process.env.API_URI}/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setFile(res.data);
        setIsOpen(true);
        persistSessionStorage("file", res.data);
        (e.currentTarget as HTMLFormElement)?.reset();
      });
  };

  return {
    file,
    loading,
    setFile,
    onSubmit,
    toggleModal,
    isOpen,
    setPrepareFile,
    prepareFile,
    handleRemove,
  };
};

export default FileUploadLogic;
