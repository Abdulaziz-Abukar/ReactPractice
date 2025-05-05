import React, {useState} from "react";

function BasicCounter(props) {
    const [count, setCounter] = useState(0);
    
    function incrementCounter() {
        setCounter(count + 1);
    }

    return (
        <div>
            <h1>Counter Component!</h1>
            <button onClick={incrementCounter}>{props.label}</button>
            <p>{count}</p>
        </div>
    )
}

export default BasicCounter;