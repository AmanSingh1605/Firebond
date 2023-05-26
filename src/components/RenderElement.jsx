
import Const from "./Const";
import ArgList from "./ArgList";
import And from "./And";
import Or from "./Or";

function RenderElement({ choice,...rest }) {
//   console.log("i am here",typeof choice,choice);

  if (choice === "1") {
    console.log("here too");
    return <Const {...rest} />;
  } else if (choice === "2") {
    return <ArgList {...rest} />;
  } else if (choice === "3") {
    return <And {...rest} />;
  } else {
    return <Or {...rest} />;
  }
}

export default RenderElement;
