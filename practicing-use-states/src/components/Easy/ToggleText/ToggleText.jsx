import React, {useState} from "react";

function ToggleText(props) {
    const [isOn, setIsOn] = useState(true)

    function textToggler() {
        setIsOn(!isOn)
    }
    return (
        <div>
            <h1>ToggleText!</h1>
            <p>{isOn ? "The light is ON" : "The light is OFF"}</p>
            <button onClick={textToggler}>{props.label}</button>
            
        </div>
    )
}

export default ToggleText;