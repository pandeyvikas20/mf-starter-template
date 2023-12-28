import React, { useState } from 'react';

function Test() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>From Store - {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Store +</button>
    </div>
  );
}

export default Test;
