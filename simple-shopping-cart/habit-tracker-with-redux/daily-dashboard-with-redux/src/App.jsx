import React from "react";
import { Todos } from "./features/todos/Todos";
import { Mood } from "./features/mood/Mood";
import { Hydration } from "./features/hydration/Hydration";
import { Notes } from "./features/notes/Notes";

export function App() {
  return (
    <>
      <header>
        <h1>Daily Dashboard</h1>
      </header>
      <main>
        <Todos />
        <Mood />
        <Hydration />
        <Notes />
      </main>
    </>
  );
}
