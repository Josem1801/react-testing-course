import React, { useState } from "react";
interface CounterProps {
  description: string;
  defaultCount: number;
}
export default function Counter({ description, defaultCount }: CounterProps) {
  const [counter, setCounter] = useState(defaultCount || 0);
  const [increment, setIncrement] = useState(1);
  return (
    <div>
      <h1>{description}</h1>
      <div>
        <button
          aria-label="Add"
          onClick={() => setTimeout(() => setCounter(counter + increment))}
        >
          +
        </button>
        <h2>Counter: {counter}</h2>
        <button
          aria-label="Substract"
          onClick={() => setCounter(counter - increment)}
        >
          -
        </button>
      </div>
      <label>
        Incrementor:
        <input
          type="number"
          value={increment}
          onChange={(e) => setIncrement(parseInt(e.target.value) || 1)}
        />
      </label>
    </div>
  );
}
