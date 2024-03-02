const UploadButton = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <button
        className={`w-44 rounded-md bg-green-500 px-7 py-1 transition-all duration-300 ease-in-out hover:bg-green-600 ${
          loading && "hidden"
        }`}
        type="submit"
      >
        Subir archivo
      </button>
      {loading && (
        <div className="flex justify-center ">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-slate-300"></div>
        </div>
      )}
    </>
  );
};

export default UploadButton;
