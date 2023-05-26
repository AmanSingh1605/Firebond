import Calculate from "./Calculate";
import { useState } from "react";

const Or = ({ ...rest }) => {
  const [state, setState] = useState(true);
  const [final,setFinal]=useState("undefined");
  const handle=(temp)=>{
    if(final==="undefined"){
        setFinal(temp);
        console.log("value set: " ,temp);
    }
    else{
        console.log(final,temp)
        if(final==="true" && temp==="true"){
            rest.handleFinal("true");
        }
        else{
            rest.handleFinal("false");
        }
    }
  }

  return (
    <>
      <div>
        <select
          name="operation"
          id="Or"
          defaultValue={"4"}
          onChange={(event) => {
            rest.handleChoice(event.target.value);
          }}
        >
          <option value="3">and</option>
          <option value="4">or</option>
        </select>

        <div className="child">
          <Calculate argList={rest.argList} handleFinal={handle} />
          <Calculate argList={rest.argList} handleFinal={handle} />
          {state ? (
            <button
              onClick={() => {
                setState(false);
              }}
            >
              +add op
            </button>
          ) : (
            <Calculate />
          )}
        </div>
      </div>
    </>
  );
};

export default Or;
