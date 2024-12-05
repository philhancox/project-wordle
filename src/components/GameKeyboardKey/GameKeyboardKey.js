import React from 'react';

function GameKeyboardKey({ status, children }) {
  const style = status === undefined ? 'key' : `key ${status}`;

  return <span className={style}>
    {children}
  </span>;
}

export default GameKeyboardKey;
