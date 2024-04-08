import { truncateString } from "@/utils/string";
import { TUploadButton } from "@/types/uploadButton";
import useIsMobile from "@/hooks/useIsMobile";

const UploadButton = ({ setPrepareFile, prepareFile }: TUploadButton) => {
  const isMobile = useIsMobile();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer?.files[0];
    setPrepareFile(droppedFile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    setPrepareFile(selectedFile);

    e.target.value = "";
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="flex items-center justify-center"
    >
      <label
        htmlFor="file"
        className="flex h-28 w-[300px] cursor-pointer items-center justify-center rounded-md border-8  border-dashed border-white font-bold uppercase text-white  transition-all  delay-75 ease-in-out hover:scale-105  hover:border-slate-300 hover:text-slate-300  sm:w-[700px]"
      >
        <span className="px-3 text-center text-sm md:text-base">
          {prepareFile
            ? truncateString(prepareFile.name, 35, 35)
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
