import { useState, useEffect } from "react";

const Arg = ({ id, name, value, updateArg }) => {
  const [inputName, setInputName] = useState(name);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    updateArg(id, inputName, inputValue);

    return () => console.log("hey");
  }, [inputName, inputValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="group">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        />
      </form>
      <select
        name="boolValue"
        id="value"
        defaultValue={value}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      >
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </div>
  );
};
export default Arg;
