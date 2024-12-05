import React from 'react';

function GameKeyboardKey({ status, children }) {
  return <span className={`key ${status}`}>
    {children}
  </span>;
}

export default GameKeyboardKey;
