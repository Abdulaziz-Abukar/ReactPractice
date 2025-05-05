import React from "react";
import BasicCounter from "./components/Easy/BasicCounter/BasicCounter";
import ToggleText from "./components/Easy/ToggleText/ToggleText";
import InputTracker from "./components/Easy/InputTracker/InputTracker";
import SecretMessage from "./components/Easy/SecretMessage/SecretMessage";
import { CountdownPlusReset } from "./components/Easy/CountdownPlusReset/CountdownPlusReset";
import { MiniShoppingCart } from "./components/Medium/MiniShoppingCart/MiniShoppingCart";
import { TaskTracker } from "./components/Medium/TaskTracker/TaskTracker";
import { MoviePicker } from "./components/Medium/MoviePicker/MoviePicker";
import { EmojiReactionBoard } from "./components/Medium/EmojiReactionBoard/EmojiReactionBoard";
import { LightSwitchPanel } from "./components/Medium/LightSwitchPanel/LightSwitchPanel";

function App() {
  return (
    <>
      {/* <BasicCounter label="Click Me!" />
      <ToggleText label="Toggle" />
      <InputTracker />
      <SecretMessage
        visibleButton="Show Secret"
        invisibleButton="Hide Secret"
      />
      <CountdownPlusReset countDown="Click to decrement!" reset="Reset" />
      <MiniShoppingCart />
      <TaskTracker /> */}
      {/* <MoviePicker /> */}
      {/* <EmojiReactionBoard /> */}
      <LightSwitchPanel />
    </>
  );
}

export default App;
