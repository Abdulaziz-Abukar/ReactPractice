import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMood, resetMood } from "./moodSlice";

export function Mood() {
  const mood = useSelector((state) => state.mood);
  const dispatch = useDispatch();
  return (
    <section>
      <h2>Mood Board</h2>
      <p>Current Mood: {mood.currentMood}</p>
      <div>
        <button onClick={() => dispatch(setMood("Happy"))}>😄</button>
        <button onClick={() => dispatch(setMood("Unwell"))}>😐</button>
        <button onClick={() => dispatch(setMood("Sad"))}>😢</button>
      </div>
      <button onClick={() => dispatch(resetMood())}>Reset Mood</button>
    </section>
  );
}
