import { truncateString } from "../utils/string";
import { TFile } from "@/types/file";

const ButtonUpload = ({
  setFile,
  file,
}: {
  setFile: Function;
  file: TFile;
}) => {
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
    <div onDragOver={handleDragOver} onDrop={handleDrop} className="pb-3">
      <label
        htmlFor="file"
        className="flex h-28  w-[700px] cursor-pointer items-center justify-center rounded-md  border-8  border-dashed  border-white  font-bold  uppercase  text-white hover:border-slate-300  hover:text-slate-300"
      >
        {file
          ? truncateString(file.name, 40, 40)
          : "Arrastra y suelta tu archivo, o haz clic para seleccionar uno"}
      </label>
      <input
        className="hidden"
        type="file"
        name="file"
        id="file"
        onChange={handleChange}
      />
    </div>
  );
};

export default ButtonUpload;
