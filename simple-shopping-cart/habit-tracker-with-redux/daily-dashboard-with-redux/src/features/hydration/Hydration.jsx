import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCup, decrementCup, resetCups } from "./hydrationSlice";

export function Hydration() {
  const hydration = useSelector((state) => state.hydration);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Cups of Water</h2>
      <p>Cups: {hydration.cups}</p>
      <div>
        <button onClick={() => dispatch(incrementCup())}>Add 1 Cup</button>
        <button onClick={() => dispatch(decrementCup())}>Subtract 1 Cup</button>
        <button onClick={() => dispatch(resetCups())}>Reset Cups</button>
      </div>
    </section>
  );
}
