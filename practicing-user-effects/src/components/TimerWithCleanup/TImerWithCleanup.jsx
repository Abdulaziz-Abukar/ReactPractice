/*
✅ Exercise 3: Timer with Cleanup

🎯 Goal:
Use useEffect to start a timer when the component loads, and stop it when the component unmounts.

🧠 What You'll Practice:
- useEffect with an empty dependency array `[]`
- setInterval and clearInterval
- Cleanup functions in useEffect

📋 Requirements:
1. When the component mounts, start a timer using setInterval
2. The timer should log "Tick..." to the console every second
3. When the component unmounts, stop the timer using clearInterval

✅ Bonus (Optional):
- Display a countdown number on screen that decreases every second
- Add a “Stop Timer” button that manually clears the interval
*/

import React, { useState, useEffect } from "react";

export function TimerWithCleanup() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timeLogger = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          return prevTime;
        } else {
          console.log("tick...");
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timeLogger);
    };
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>Time Remaining: {time}</p>
    </div>
  );
}
