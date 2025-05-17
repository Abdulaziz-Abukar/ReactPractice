import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, toggleTask, clearAllTasks } from "./todosSlice";
import { generateId } from "../../utils/idGenerator";

export function Todos() {
  // State Caller & Dispatch
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // useState
  const [taskName, setTaskName] = useState("");

  // Task Submission Handler
  function taskHandler(e) {
    e.preventDefault();

    const newTask = {
      id: generateId(),
      name: taskName,
      done: false,
    };

    dispatch(addTask(newTask));
    setTaskName("");
  }

  // Grab All complete Tasks
  const completeTasks = todoList.reduce((acc, task) => acc + task.done, 0);
  // Grab All Tasks
  const allTasks = todoList.length;

  return (
    <section>
      <h2>Task List</h2>
      <form onSubmit={taskHandler}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          name="taskName"
          id="taskName"
          placeholder="Enter a task name..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Submit Task</button>
      </form>
      <section>
        {todoList.map((task) => (
          <section key={task.id}>
            <p>Name: {task.name}</p>
            <p>Completion: {task.done ? "True" : "False"}</p>
            <button onClick={() => dispatch(toggleTask(task.id))}>
              Complete
            </button>
            <button onClick={() => dispatch(removeTask(task.id))}>
              Remove Task
            </button>
          </section>
        ))}
        {todoList.length === 0 ? (
          <p>No Tasks...</p>
        ) : (
          <p>
            {completeTasks} / {allTasks} complete
          </p>
        )}
        <button onClick={() => dispatch(clearAllTasks())}>
          Clear All Tasks
        </button>
      </section>
    </section>
  );
}
