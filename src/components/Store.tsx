import { TFile } from "@/types/file";
import { atom } from "nanostores";

export const files = atom<TFile[]>([]);

export const addFile = (file: TFile) => {
  files.set([...files.get(), file]);
};
