/*
1. Custom Button with Dynamic Label and Action
Create a Button component that:

Accepts a label and onClick handler as props

Uses default label: "Click Me" if none passed

When clicked, calls the parent function and logs a message
*/

import React from "react";

function CustomButton(props) {

    const {label = "Click Me"} = props;
    return (
    <button type="button" onClick={props.onClick}>{label}</button>
    );
}

export default CustomButton;