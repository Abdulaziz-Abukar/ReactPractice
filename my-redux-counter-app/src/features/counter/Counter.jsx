import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  resetCounter,
  multipleBy,
} from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [additionIncrementer, setAdditionIncrementer] = useState("");
  const [multiplicationIncrementer, setMultiplicationIncrementer] =
    useState("");

  function handleNumAddition(e) {
    e.preventDefault();
    dispatch(incrementByAmount(Number(additionIncrementer)));
    setAdditionIncrementer("");
  }

  function handleNumMultiply(e) {
    e.preventDefault();
    dispatch(multipleBy(Number(multiplicationIncrementer)));
    setMultiplicationIncrementer("");
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <form onSubmit={handleNumAddition}>
        <input
          type="number"
          name="numAddition"
          id="numAddition"
          placeholder="add a number amount..."
          min="0"
          onChange={(e) => setAdditionIncrementer(e.target.value)}
          value={additionIncrementer}
        />
        <button type="submit">Add Amount</button>
      </form>
      <form onSubmit={handleNumMultiply}>
        <input
          type="number"
          name="numMultiply"
          id="numMultiply"
          placeholder="multiply number amount..."
          min="0"
          onChange={(e) => setMultiplicationIncrementer(e.target.value)}
          value={multiplicationIncrementer}
        />
        <button type="submit">Multiply</button>
      </form>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
}

export default Counter;
