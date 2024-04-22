"use client";

const SharingOptions = ({ id }: { id: string }) => {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="mt-14 flex flex-col items-center gap-5">
      <h2 className="text-center text-2xl font-bold">
        Comparte este archivo con tus amigos
      </h2>
      <div className="flex gap-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flfkos.ddns.net%2Ffile%2F${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-slate-300"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Flfkos.ddns.net%2Ffile%2F${id}&text=Temporal%20files`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-slate-300"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>

        <a
          href={`mailto:?subject=Check%20out%20this%20page&amp;body=Here%20is%20the%20link%20to%20the%20page:%20https%3A%2F%2lfkos.ddns.net%2Ffile%2F${id}`}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-slate-300"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </a>

        <button onClick={copyLink}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-slate-300"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 15l6 -6" />
            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SharingOptions;
