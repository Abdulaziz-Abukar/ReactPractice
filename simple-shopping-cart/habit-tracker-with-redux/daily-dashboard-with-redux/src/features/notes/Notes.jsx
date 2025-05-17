import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNote, clearNote } from "./notesSlice";

export function Notes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [note, setNote] = useState("");

  function noteHandler(e) {
    e.preventDefault();

    dispatch(updateNote(note));
    setNote("");
  }

  return (
    <section>
      <form onSubmit={noteHandler}>
        <label htmlFor="note">Note: </label>
        <textarea
          name="note"
          id="note"
          placeholder="Type your notes for today..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button type="submit">Submit Note</button>
      </form>
      {notes.content && <p>Your Note: {notes.content}</p>}
      <button onClick={() => dispatch(clearNote())}>Clear Note</button>
    </section>
  );
}
