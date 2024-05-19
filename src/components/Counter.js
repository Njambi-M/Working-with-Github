import React, { useState } from 'react';

function Counter() {
  // useState hook to manage state
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      {/* Button to increment the counter */}
      <button onClick={incrementCount}>Increment +1</button>
    </div>
  );
}

export default Counter;
