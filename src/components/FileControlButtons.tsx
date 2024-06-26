const FileControlButtons = ({
  handleRemove,
  loading,
}: {
  handleRemove: () => void;
  loading: Boolean;
}) => {
  return (
    <div className="flex items-center justify-center gap-1">
      {loading ? (
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-slate-300"></div>
      ) : (
        <>
          <button
            onClick={handleRemove}
            type="button"
            className="m-3 h-9 w-32 rounded-md bg-red-500 hover:bg-red-600 md:m-2 "
          >
            Cancelar
          </button>

          <button className="m-3 h-9 w-32 rounded-md bg-green-600 hover:bg-green-700 md:m-2 ">
            Subir archivo
          </button>
        </>
      )}
    </div>
  );
};

export default FileControlButtons;
