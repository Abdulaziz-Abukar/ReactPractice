/*
✅ Exercise 2: Typing Tracker

🎯 Goal:
Track what the user types and log it to the console using useEffect.

🧠 What You'll Practice:
- useState to store user input
- useEffect with [text] as dependency
- Logging side effects when state changes

📋 Requirements:
1. Create a text input field
2. Store the input value in state using useState
3. Use useEffect to log:
   "Text updated to: [current text]"
   whenever the input value changes

✅ Bonus (Optional):
- Display the current typed value on screen
- Ignore logging if input is empty
*/

import React, { useState, useEffect } from "react";

export function TypingTracker() {
  const [text, setText] = useState("");
  useEffect(() => {
    if (text !== "") {
      console.log(`Text updated to: ${text}`);
    }
  }, [text]);
  return (
    <div>
      <input
        type="text"
        name="input"
        id="input"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
