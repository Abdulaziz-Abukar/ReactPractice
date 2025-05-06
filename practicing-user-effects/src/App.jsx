import React from "react";
import { ComponentLogger } from "./components/ComponentLogger/ComponentLogger";
import { TypingTracker } from "./components/TypingTracker/TypingTracker";
import { TimerWithCleanup } from "./components/TimerWithCleanup/TImerWithCleanup";

function App() {
  return (
    <>
      {/* <ComponentLogger /> */}
      {/* <TypingTracker /> */}
      <TimerWithCleanup />
    </>
  );
}
export default App;
