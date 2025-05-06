/*
✅ Exercise 4: Window Width Tracker

🎯 Goal:
Track and display the current width of the browser window.

🧠 What You'll Practice:
- useEffect with event listeners
- Responding to window size changes
- Cleanup functions to avoid memory leaks

📋 Requirements:
1. Track the current width of the window using useState
2. Use useEffect to listen for window resize events
3. Update the width in state whenever the window resizes
4. Clean up the event listener when the component unmounts

✅ Bonus (Optional):
- Display a message like "You're on a small screen" if width < 768px
*/

import React, { useState, useEffect } from "react";

export function WinWidthAndHeightTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleWidthResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWidthResize);

    return () => {
      window.removeEventListener("resize", handleWidthResize);
    };
  }, []);

  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleHeightResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleHeightResize);

    return () => {
      window.removeEventListener("resize", handleHeightResize);
    };
  }, []);
  return (
    <div>
      <h1>Window Width Tracker!</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
      <p>{width < 768 ? "You're on a small screen" : ""}</p>
    </div>
  );
}
