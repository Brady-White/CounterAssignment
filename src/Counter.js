import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    // Fill in code for increment here
    increment = () => {
      setCount(count + 1);
    };
  }
  function decrement() {
    // Fill in code for decrement here
    decrement = () => {
      setCount(count - 1);
    };
  }
  return (
    <div>
      <h2>Counter Assignment</h2>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}
