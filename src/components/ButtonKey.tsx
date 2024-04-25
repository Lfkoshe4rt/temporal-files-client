import { toast } from "react-hot-toast";

const ButtonKey = ({ fileKey }: { fileKey: string }) => {
  const handleCopyKey = () => {
    navigator.clipboard.writeText(fileKey);
    toast.success("Clave copiada al portapapeles");
  };

  return (
    <button
      onClick={handleCopyKey}
      className="mx-auto block font-bold text-green-400 underline transition-all delay-75 ease-linear hover:text-green-500 sm:ml-auto  sm:mr-6"
    >
      Copiar clave de acceso
    </button>
  );
};

export default ButtonKey;
