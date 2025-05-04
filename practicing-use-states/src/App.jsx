import React from "react";
import BasicCounter from "./components/Easy/BasicCounter/BasicCounter";
import ToggleText from "./components/Easy/ToggleText/ToggleText";
import InputTracker from "./components/Easy/InputTracker/InputTracker";
import SecretMessage from "./components/Easy/SecretMessage/SecretMessage";
import { CountdownPlusReset } from "./components/Easy/CountdownPlusReset/CountdownPlusReset";
import { MiniShoppingCart } from "./components/Medium/MiniShoppingCart/MiniShoppingCart";
import { TaskTracker } from "./components/Medium/TaskTracker/TaskTracker";

function App() {
  return (
    <>
      {/* <BasicCounter label='Click Me!'/>
            <ToggleText label='Toggle'/>
            <InputTracker />
            <SecretMessage visibleButton='Show Secret' invisibleButton='Hide Secret'/>
            <CountdownPlusReset countDown="Click to decrement!" reset="Reset"/>  */}
      {/* <MiniShoppingCart /> */}
      <TaskTracker />
    </>
  );
}

export default App;
