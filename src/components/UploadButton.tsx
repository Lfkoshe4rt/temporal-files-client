import { truncateString } from "@/utils/string";
import { TUploadButton } from "@/types/uploadButton";
import useIsMobile from "@/hooks/useIsMobile";

const UploadButton = ({ setFile, file }: TUploadButton) => {
  const isMobile = useIsMobile();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer?.files[0];
    setFile(droppedFile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    setFile(selectedFile);
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="flex justify-center items-center"
    >
      <label
        htmlFor="file"
        className="flex h-28 w-[300px] sm:w-[700px] cursor-pointer items-center justify-center rounded-md  border-8  border-dashed  border-white  font-bold  uppercase  text-white hover:border-slate-300  hover:text-slate-300"
      >
        <span className="px-3 text-center text-sm md:text-base">
          {file
            ? truncateString(file.name, 35, 35)
            : isMobile
            ? "Presiona para subir un archivo"
            : "Arrastra y suelta un archivo aquí o presiona para subirlo"}
        </span>
      </label>
      <input
        className="hidden"
        type="file"
        name="file"
        id="file"
        onChange={handleChange}
      />
    </section>
  );
};

export default UploadButton;
