import React from 'react';

function GuessLetter({ letter, status }) {
  const cellStyle = status === 'empty' ? 'cell' : `cell ${status}`

  return <span className={cellStyle}>{letter}</span>
}

export default GuessLetter;
