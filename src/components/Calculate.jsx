import { useState } from "react";
import RenderElement from "./RenderElement";
import InputChoice from "./InputChoice";

const Calculate = ({...rest }) => {
  const [state, setState] = useState(true);
  const [choice, setChoice] = useState("0");
  
  const handleChoice = (n) => {
    console.log("hey", typeof n);
    setState(false);
    setChoice(n);
  };

  return (
    <div className="result">
      <div>
        {state ? (
          <InputChoice handleChoice={handleChoice} />
        ) : (
          <RenderElement choice={choice} handleChoice={handleChoice} {...rest} />
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setState(true);
          }}
          className="closeButton"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Calculate;
