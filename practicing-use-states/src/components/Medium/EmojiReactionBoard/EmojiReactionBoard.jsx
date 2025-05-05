/*
🎯 Exercise 3: Emoji Reaction Board
🧠 What You'll Practice:
useState with objects

Updating values inside objects using the spread operator

Counting clicks dynamically

Conditional rendering

Clean UI structure

✅ The Goal:
Build a board of emoji buttons (example: 👍 ❤️ 😂 😮 😢)
When the user clicks on an emoji:

It gets added to a reaction tracker

The tracker counts how many times each emoji was clicked
*/

import React, { useState } from "react";
import emojiReactions from "../../../data/emojiReactions";

export function EmojiReactionBoard() {
  const [reactionCounts, setReactionCounts] = useState({});

  function handleEmojiClick(emoji) {
    setReactionCounts((prev) => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1,
    }));
  }

  return (
    <div>
      <h1>Emoji Reaction Board!</h1>
      <p>Click Your Reaction:</p>

      {emojiReactions.map((emoji) => (
        <button
          onClick={() => handleEmojiClick(emoji)}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          {emoji}
        </button>
      ))}
      <p>Reactions:</p>
      <ul>
        {Object.entries(reactionCounts).map(([emoji, count]) => (
          <li key={emoji}>
            {emoji} x{count}
          </li>
        ))}
      </ul>
    </div>
  );
}
