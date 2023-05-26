const ArgList = ({ ...rest }) => {
  let renderList = rest.argList.map((arg) => {
    return <option value={arg.value} key={arg.id}>{arg.name}</option>;
  });

  return (
    <>
      <select id="argList" defaultValue={"undefined"} onChange={event=>rest.handleFinal(event.target.value)}>
        <option value="undefined" disabled>select...</option>
        {renderList}</select>
    </>
  );
};

export default ArgList;
