import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, removeTask, clearTasks } from "./taskSlice";

export function Tasks() {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.tasktracker);
  const dispatch = useDispatch();
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  function handleSubmit(e) {
    e.preventDefault();

    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    dispatch(addTask(newTask));
    setTask("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button onClick={() => dispatch(removeTask(task.id))}>🗑</button>
          </li>
        ))}
      </ul>
      <footer>
        <p>
          {completedTasks} of {totalTasks} tasks completed
        </p>
        <button onClick={() => dispatch(clearTasks())}>Clear Tasks</button>
      </footer>
    </div>
  );
}
