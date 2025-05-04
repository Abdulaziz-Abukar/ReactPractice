import React from "react";
import BasicCounter from "./components/BasicCounter/BasicCounter";
import ToggleText from "./components/ToggleText/ToggleText";
import InputTracker from "./components/InputTracker/InputTracker";
import SecretMessage from "./components/SecretMessage/SecretMessage";
import { CountdownPlusReset } from "./components/CountdownPlusReset/CountdownPlusReset";

function App() {
    return (
        <>
            <BasicCounter label='Click Me!'/>
            <ToggleText label='Toggle'/>
            <InputTracker />
            <SecretMessage visibleButton='Show Secret' invisibleButton='Hide Secret'/>
            <CountdownPlusReset countDown="Click to decrement!" reset="Reset"/> 
        </>
    )
}

export default App;