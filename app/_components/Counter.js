"use client";

import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter((i) => i + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
