import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  resetCounter,
} from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [numIncrementer, setNumIncrementer] = useState("");

  function handleNumSubmission(e) {
    e.preventDefault();
    dispatch(incrementByAmount(Number(numIncrementer)));
    setNumIncrementer("");
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <form onSubmit={handleNumSubmission}>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="add a number amount..."
          onChange={(e) => setNumIncrementer(e.target.value)}
          value={numIncrementer}
        />
      </form>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
}

export default Counter;
