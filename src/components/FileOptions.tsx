import { convertToUnits } from "@/utils/format";
import { truncateString } from "@/utils/string";
import PermanentCheckbox from "./PermanentCheckbox";
import PrivateCheckbox from "./PrivateCheckbox";
import TimeInput from "./TimeInput";

const FileOptions = ({ file }: { file: File }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="relative my-3 flex h-auto w-[300px] items-center gap-6 rounded-md bg-neutral-800 py-4 md:w-[700px] md:justify-between md:px-5">
      <div>
        {!isMobile && (
          <div className="flex h-16 w-16 items-center justify-center rounded-md bg-neutral-700">
            <svg
              width="50"
              height="50"
              className="text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 18H17V16H7V18Z" fill="currentColor" />
              <path d="M17 14H7V12H17V14Z" fill="currentColor" />
              <path d="M7 10H11V8H7V10Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col gap-3 md:flex-row">
          <p>{truncateString(file.name, 25, 25)}</p>
          <p>
            {isMobile && "Tamaño:"}&nbsp;
            {convertToUnits(Number(file.size))}
          </p>
        </div>
        <div className="flex flex-col items-start gap-5  md:flex-row">
          <TimeInput />
          <PermanentCheckbox />
          <PrivateCheckbox />
        </div>
      </div>
    </div>
  );
};

export default FileOptions;
