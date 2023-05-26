import { useState } from "react";
import "./App.css";
import GenArg from "./components/GenArg";
import Arg from "./components/Arg";
import Calculate from "./components/Calculate";

function App() {
  const [arg, setArg] = useState([{ id: "0", name: "My Arg", value: "false" }]);
  const [final, setFinal] = useState("undefined");

  const handleFinal = (temp) => {
    setFinal(temp);
  };
  const addArg = () => {
    setArg([...arg, { id: arg.length, name: "newarg", value: "false" }]);
  };

  const updateArg = (id, name, value) => {
    let newarg = arg.map((e) => {
      if (id === e.id) {
        console.log(e);
        return { ...e, name: name, value: value };
      }
      return e;
    });
    setArg(newarg);
    console.log(newarg);
  };

  const renderList = arg.map((e) => {
    return (
      <Arg
        id={e.id}
        name={e.name}
        value={e.value}
        updateArg={updateArg}
        key={e.id}
      />
    );
  });

  return (
    <div>
      {renderList}
      <GenArg addArg={addArg} />
      <div className="r">
        <Calculate argList={arg} handleFinal={handleFinal} />
      </div>
      <div className="final">result: {final} </div>
    </div>
  );
}

export default App;
