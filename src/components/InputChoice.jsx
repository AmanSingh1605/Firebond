
const InputChoice=({handleChoice})=>{
    const handleSelect=(event)=>{
        handleChoice(event.target.value);
    }

    return <>
        <select name="contentChoice" id="mainChoice" defaultValue={"0"} onChange={handleSelect}>
            <option value="0" disabled>select...</option>
            <option value="1">Constant</option>
            <option value="2">Argument</option>
            <option value="3">And</option>
            <option value="4">Or</option>
        </select>
    </>;
};

export default InputChoice;