import React from "react";
import { ComponentLogger } from "./components/ComponentLogger/ComponentLogger";
import { TypingTracker } from "./components/TypingTracker/TypingTracker";
import { TimerWithCleanup } from "./components/TimerWithCleanup/TImerWithCleanup";
import { WinWidthAndHeightTracker } from "./components/WindowWidthTracker/WinWidthAndHeightTracker";

function App() {
  return (
    <>
      {/* <ComponentLogger /> */}
      {/* <TypingTracker /> */}
      {/* <TimerWithCleanup /> */}
      <WinWidthAndHeightTracker />
    </>
  );
}
export default App;
