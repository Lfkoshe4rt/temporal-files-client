import { TFile } from "./file";

export type TModal = {
  file: TFile;
  isOpen: boolean;
  onClose: () => void;
};
