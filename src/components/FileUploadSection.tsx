import { TFile } from "@/types/file";
import ButtonUpload from "./ButtonUpload";
import TimeInput from "./TimeInput";
import PrivateCheckbox from "./PrivateCheckbox";
import PermanentCheckbox from "./PermanentCheckbox";

type FileUploadSectionProps = {
  setFile: (file: TFile | null) => void;
  file: TFile;
};

const FileUploadSection = ({ setFile, file }: FileUploadSectionProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <ButtonUpload setFile={setFile} file={file} />
      <div className="flex flex-col pb-3 md:flex-row md:gap-5">
        <TimeInput />
        <PrivateCheckbox />
        <PermanentCheckbox />
      </div>
    </div>
  );
};

export default FileUploadSection;
