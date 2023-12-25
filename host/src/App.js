import React, { useState } from 'react';
import Model from 'mfe1/Model';

import { useStore } from 'store/store';

function App() {
  const { count } = useStore();

  return (
    <div>
      <h1>Host Up</h1>
      {/* <Counter /> */}
      <button onClick={() => setShowModel(!showModel)}>Open Mfe1 Model</button>
      {showModel && <Model onClose={() => setShowModel(false)} />}
    </div>
  );
}

export default App;
