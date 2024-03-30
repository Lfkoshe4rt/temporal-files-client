const Modal = ({
  file,
  isOpen,
  onClose,
}: {
  file: any;
  isOpen: any;
  onClose: any;
}) => {
  if (!isOpen) return null;

  const handleCopyKey = () => {
    navigator.clipboard.writeText(file.key);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="absolute right-0 top-0 h-full w-full bg-black opacity-70"
      ></div>
      <div className="fixed inset-0 z-10 flex  items-center justify-center overflow-y-auto ">
        <div className="relative h-auto w-96 rounded-md bg-white">
          <button
            onClick={onClose}
            className=" absolute right-3 top-1 text-xl font-bold text-white hover:text-slate-200 "
          >
            X
          </button>
          <div className="flex h-32 items-center justify-center rounded-t-md bg-green-400">
            <svg width="84" height="84" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex h-auto flex-col items-center justify-center gap-3 p-3 text-black">
            <div className="text-center text-slate-600 ">
              <h1 className="text-3xl ">Suceso!</h1>
              <p className="p-1">Archivo subido correctamente</p>

              {file.private && (
                <p onClick={handleCopyKey}>
                  Clave: &nbsp;
                  <span className="text-green-700">{file.key}</span>
                </p>
              )}
            </div>
            <a
              href={`/file/${file._id}`}
              className="rounded-md bg-green-400 px-12 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-green-500"
            >
              Ir al archivo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
