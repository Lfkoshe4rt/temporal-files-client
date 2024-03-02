
const PermanentCheckbox = () => {
  return (
    <div className="my-3 flex cursor-pointer items-center justify-center gap-2">
      <label htmlFor="permanent" className="cursor-pointer">
        Permanente:
      </label>
      <input
        type="checkbox"
        name="permanentFile"
        className="cursor-pointer"
        id="permanent"
      />
    </div>
  );
};

export default PermanentCheckbox;
