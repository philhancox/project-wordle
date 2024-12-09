import React from 'react';
import GameKeyboardKey from "../GameKeyboardKey";

function GameKeyboard({ letters }) {

  return <div className="keyboard">
    {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((keys) => {
      return <div className="keyboard-row">
        {keys.split('').map((letter, index) => {
          return <GameKeyboardKey key={index} status={letters[letter]}>{letter}</GameKeyboardKey>
        })}
      </div>
    })}
  </div>
}

export default GameKeyboard;
