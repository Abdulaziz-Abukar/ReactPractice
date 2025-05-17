import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addHabit,
  removeHabit,
  incrementStreak,
  resetStreak,
  clearHabits,
} from "./habitsSlice";

export function Habits() {
  // State caller and dispatch holder
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  // UseState
  const [habitName, setHabitName] = useState("");

  // varibles for total habits and total days completed
  const habitTotal = habits.length;
  const habitDaysCompleted = habits.reduce(
    (acc, habit) => acc + habit.streak,
    0
  );

  // Habit handler
  function habitHandler(e) {
    e.preventDefault();

    if (!habitName.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habitName,
      streak: 1,
    };

    dispatch(addHabit(newHabit));
    setHabitName("");
  }

  const sortedHabits = [...habits].sort((a, b) => b.streak - a.streak);

  return (
    <div>
      <form onSubmit={habitHandler}>
        <label htmlFor="habitName">Habit Name:</label>
        <input
          type="text"
          name="habitName"
          id="habitName"
          placeholder="Enter a habit..."
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <button type="submit">Submit Habit</button>
      </form>

      <ul>
        {sortedHabits.map((habit) => (
          <li key={habit.id}>
            {habit.name} {habit.streak}{" "}
            <span>
              <button onClick={() => dispatch(incrementStreak(habit))}>
                Add 1 Day
              </button>
              <button onClick={() => dispatch(resetStreak(habit))}>
                Reset Streak
              </button>
              <button onClick={() => dispatch(removeHabit(habit))}>
                Remove Habit
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => dispatch(clearHabits())}>
          Clear All Habits
        </button>
      </div>
      <section>
        {habits.length === 0 ? (
          <p>No Habits</p>
        ) : (
          <div>
            <p>Total Habits: {habitTotal}</p>
            <p>Total Days Completed: {habitDaysCompleted}</p>
          </div>
        )}
      </section>
    </div>
  );
}
