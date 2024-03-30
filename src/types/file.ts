export type TFile = {
  _id: string;
  name: string;
  size: string;
  url: string;
  permanent: boolean;
  private: boolean;
  createdAt: string;
  time: number;
  key: string;
  message: string;
};

export type TResponse = {
  status: string;
  data: TFile;
  message: string;
};
