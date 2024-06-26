import { MouseEventHandler } from "react";

const ButtonMobile = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className="z-10 sm:hidden" onClick={onClick}>
      {open ? (
        <svg
          className="h-6 w-6 sm:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      ) : (
        <svg
          className="h-6 w-6 sm:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default ButtonMobile;
