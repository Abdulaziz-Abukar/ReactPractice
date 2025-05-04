import React, { useState } from "react";

export function TaskTracker() {
  const [tasks, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  function addTask() {
    if (taskInput.trim() !== "") {
      setTask((prev) => [...prev, { text: taskInput, isDone: false }]);
      setTaskInput("");
    }
  }

  function completedTask(index) {
    setTask((prevTasks) =>
      prevTasks.map((taskObj, i) => {
        if (i === index) {
          return { ...taskObj, isDone: true };
        } else {
          return taskObj;
        }
      })
    );
  }

  return (
    <div>
      <h1>TaskTracker</h1>
      <input
        type="text"
        id="task"
        name="task"
        placeholder="type your task here..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((taskObj, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: taskObj.isDone ? "line-through" : "none",
              }}
            >
              {taskObj.text}
            </span>
            {!taskObj.isDone && (
              <button onClick={() => completedTask(index)}>Mark Done</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
