import React, { useState } from 'react';
import { useStore } from 'store/store';

function Counter() {
  const [counter, setCounter] = useState(0);
  const { increment, count } = useStore();

  return (
    <div>
      <p>Counter from Mfe1 : {count}</p>
      <button onClick={() => increment()}>Increase</button>
    </div>
  );
}

export default Counter;
