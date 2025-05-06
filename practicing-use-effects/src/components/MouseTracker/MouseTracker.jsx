/*
✅ Exercise 6: Mouse Tracker

🎯 Goal:
Track the user's mouse position in real time.

🧠 What You'll Practice:
- useEffect with event listeners
- Working with mouse events
- Updating coordinates in state
- Cleanup with removeEventListener

📋 Requirements:
1. Track the mouse's X and Y position using `useState`
2. Use `useEffect` to listen for mouse movement (`mousemove`)
3. Update the coordinates every time the mouse moves
4. Clean up the event listener on component unmount

✅ Bonus (Optional):
- Only track the mouse while a toggle (e.g., checkbox or button) is ON
*/

import React, { useState, useEffect } from "react";

export function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseEventHandler = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseEventHandler);

    return () => {
      window.removeEventListener("mousemove", mouseEventHandler);
    };
  }, []);

  return (
    <div>
      <p>x: {mousePosition.x}</p>
      <p>y: {mousePosition.y}</p>
    </div>
  );
}
