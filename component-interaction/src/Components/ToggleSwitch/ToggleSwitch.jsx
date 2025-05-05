import React from "react";

function ToggleSwitch(props) {
    return (
        <button onClick={props.onToggle}>
            {props.isOn ? "ON" : "OFF"}
        </button>
    )
}

export default ToggleSwitch;