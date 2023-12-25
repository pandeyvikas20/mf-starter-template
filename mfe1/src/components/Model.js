import React from 'react';

function Model({ onClose }) {
  const handleOnClose = () => {
    console.log('Closing Model...');
    onClose();
  };

  return (
    <div style={{ border: '1px solid grey', padding: '50px' }}>
      <h1>This is a Modal</h1>
      Name : Model
      <button onClick={handleOnClose}>Close</button>
    </div>
  );
}

export default Model;
