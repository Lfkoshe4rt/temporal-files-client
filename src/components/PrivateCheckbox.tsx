const PrivateCheckbox = () => {
  return (
    <div className="flex cursor-pointer select-none items-center justify-center gap-2">
      <label htmlFor="private" className="cursor-pointer">
        Privado:
      </label>
      <input
        type="checkbox"
        name="privateFile"
        className="cursor-pointer"
        id="private"
      />
    </div>
  );
};

export default PrivateCheckbox;
