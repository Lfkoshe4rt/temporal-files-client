import { TFile } from "@/types/file";
import { AnimatePresence, motion } from "framer-motion";

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.6 },
  exit: { opacity: 0 },
};

const modalVariants = {
  initial: { opacity: 0, y: -300 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -300 },
};

const Modal = ({
  file,
  isOpen,
  onClose,
}: {
  file: TFile;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const handleCopyKey = () => {
    navigator.clipboard.writeText(file.key);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 flex items-center justify-center overflow-y-auto"
        >
          <motion.div
            onClick={onClose}
            variants={backdropVariants}
            transition={{ duration: 0.2 }}
            className="fixed inset-0  bg-black transition-opacity"
            aria-hidden="true"
          ></motion.div>

          <motion.div
            variants={modalVariants}
            transition={{ duration: 0.25 }}
            className="shadow-x z-10 m-4 inline-block w-full overflow-hidden rounded-lg bg-white text-left align-bottom  sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
          >
            <div className="bg-white ">
              <div className="flex h-36 items-center justify-center bg-green-400 ">
                <svg
                  width="84"
                  height="84"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
              <div className="pb-5 text-center text-xl text-slate-600">
                <h1 className="text-3xl ">Suceso!</h1>
                <p className="p-1">Archivo subido correctamente</p>

                {file.private && (
                  <div className="flex flex-col items-center justify-center gap-2 sm:flex-row ">
                    <button
                      onClick={handleCopyKey}
                      className="mt-1 text-green-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-green-700 sm:mt-0"
                      title="Copiar clave"
                    >
                      <span className="text-md font-bold text-slate-600 sm:hidden">
                        Presionar para copiar clave
                      </span>
                      <span className="flex w-64 items-center sm:w-full ">
                        <span className="hidden text-black sm:inline-block">
                          Clave:&nbsp;
                        </span>
                        {file.key}
                      </span>
                    </button>
                  </div>
                )}

                <a
                  href={`/file/${file._id}`}
                  className="mt-2 inline-block rounded-md bg-green-400 px-12 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-green-500"
                >
                  Ir al archivo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
