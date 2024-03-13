const FileControlButtons = ({ handleRemove }: { handleRemove: () => void }) => {
  return (
    <div className="flex gap-1 justify-center items-center">
      <button
        onClick={handleRemove}
        className="hover:bg-red-600 bg-red-500 h-10 w-32 rounded-md m-3 md:m-2 "
      >
        Cancelar
      </button>

      <button className="hover:bg-green-800 bg-green-700 h-10 w-32 rounded-md m-3 md:m-2 ">
        Subir archivo
      </button>
    </div>
  );
};

export default FileControlButtons;
