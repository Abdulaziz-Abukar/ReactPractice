/*

✅ Exercise 1: "Component Loaded" Logger
Goal: Use useEffect to log a message once when the component mounts.

🧠 Practice: useEffect with empty dependency array []

Challenge: Display "Component has loaded!" in the console when the component renders the first time.
*/

import React, { useState, useEffect } from "react";

export function ComponentLogger() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const messagePrinter = setInterval(() => {
      console.log(message);
    }, 1000);

    return () => {
      clearInterval(messagePrinter);
    };
  }, [message]);

  return (
    <div>
      <h1>Component Logger!</h1>
      <input
        type="text"
        name="message"
        id="message"
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}
