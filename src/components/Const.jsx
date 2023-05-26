const Const = ({...rest}) => {
  return (
    <>
      <select id="cosntVal" defaultValue={"false"} onChange={event=>{rest.handleFinal(event.target.value);}}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </>
    );
};

export default Const;