import { addFile } from "@/components/Store";
import { TFile } from "@/types/file";
import { useState } from "react";

const FileUploadLogic = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<TFile | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    if (!file) {
      alert("No has seleccionado un archivo");
      return;
    }

    setLoading(true);
    fetch(`${process.env.API_URI}/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        addFile(data);
        setFile(null);
        setIsOpen(true);

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
  };
};

export default FileUploadLogic;
