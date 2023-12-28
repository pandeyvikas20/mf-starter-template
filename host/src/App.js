import React, { useState, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Test from 'store/Test';

const Model = React.lazy(() => import('mfe1/Model'));

function App() {
  const [showModel, setShowModel] = useState(false);

  const openModel = () => {
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <div>
      <h1>Host Up</h1>
      <button onClick={openModel}>Open Mfe1 Model</button>

      <Suspense fallback={<div>Loading...</div>}>
        {showModel && (
          <ErrorBoundary
            fallback={
              <div>Network issue. Unable to load the Model component.</div>
            }
          >
            <Model onClose={closeModel} />
          </ErrorBoundary>
        )}
      </Suspense>
      <Test />
    </div>
  );
}

// Error boundary component

export default App;
