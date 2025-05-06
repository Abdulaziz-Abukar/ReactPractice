import React from "react";
import { ComponentLogger } from "./components/ComponentLogger/ComponentLogger";
import { TypingTracker } from "./components/TypingTracker/TypingTracker";
import { TimerWithCleanup } from "./components/TimerWithCleanup/TImerWithCleanup";
import { WinWidthAndHeightTracker } from "./components/WindowWidthTracker/WinWidthAndHeightTracker";
import { DynamicDocumentTitle } from "./components/DynamicDocumentTitle/DynamicDocumentTitle";
import { MouseTracker } from "./components/MouseTracker/MouseTracker";
import { FetchAndDisplayData } from "./components/FetchAndDisplayData/FetchAndDisplayData";

function App() {
  return (
    <>
      {/* <ComponentLogger /> */}
      {/* <TypingTracker /> */}
      {/* <TimerWithCleanup /> */}
      {/* <WinWidthAndHeightTracker /> */}
      {/* <DynamicDocumentTitle /> */}
      {/* <MouseTracker /> */}
      <FetchAndDisplayData />
    </>
  );
}
export default App;
