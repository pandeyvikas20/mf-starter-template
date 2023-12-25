import React, { useState } from 'react';
import Counter from './components/Counter';
import { StoreProvider } from 'store/store';
import Model from './components/Model';

function App() {
  const [showModel, setShowModel] = useState();
  return (
    <StoreProvider>
      <h1>Mfe 1</h1>
      <Counter />
      <button onClick={() => setShowModel(true)}>Show Model</button>
      {showModel && <Model onClose={() => setShowModel(false)} />}
    </StoreProvider>
  );
}

export default App;
