/*
✅ Exercise 5: Dynamic Document Title

🎯 Goal:
Use useEffect to update the page title (what appears in the browser tab) based on input.

🧠 What You'll Practice:
- useEffect that reacts to user input
- Dynamically updating `document.title`
- Reacting to state changes

📋 Requirements:
1. Create a text input
2. Store the input value in state
3. Use useEffect to update `document.title` to match the input
4. If input is empty, title should say: "React App"

✅ Bonus (Optional):
- Display the current document title somewhere on the page
*/

import React, { useState, useEffect } from "react";

export function DynamicDocumentTitle() {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    if (title === "") {
      document.title = "React App";
    } else {
      document.title = title;
    }
  }, [title]);

  const clearTitle = () => {
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Type to display in title...."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={clearTitle}>Clear Title</button>
      <p>Document Title: {document.title}</p>
    </div>
  );
}
