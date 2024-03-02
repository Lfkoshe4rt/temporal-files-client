
const TimeInput = () => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    if (key === "Backspace") {
      return;
    }

    if (key < "0" || key > "9") {
      e.preventDefault();
    }
  };

  return (
    <div className="my-3">
      <label htmlFor="minutes">Tiempo: </label>
      <input
        min="1"
        max="60"
        defaultValue="1"
        className="w-11 rounded-md border-2 border-none border-b-white bg-neutral-700 text-center outline-none"
        type="number"
        name="minutes"
        id="minutes"
        onKeyDown={handleKeyPress}
        maxLength={3}
      />
      <span className="ml-1">min</span>
    </div>
  );
};

export default TimeInput;
