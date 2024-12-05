import React from 'react';
import GameKeyboardKey from "../GameKeyboardKey";

function GameKeyboard({ letters }) {

  return <div className="keyboard">
    <div className="keyboard-row">
      {'QWERTYUIOP'.split('').map((letter, index) => {
        return <GameKeyboardKey key={index} status={letters[letter]}>{letter}</GameKeyboardKey>
      })}
    </div>
    <div className="keyboard-row">
      {'ASDFGHJKL'.split('').map((letter, index) => {
        return <GameKeyboardKey key={index} status={letters[letter]}>{letter}</GameKeyboardKey>
      })}
    </div>
    <div className="keyboard-row">
      {'ZXCVBNM'.split('').map((letter, index) => {
        return <GameKeyboardKey key={index} status={letters[letter]}>{letter}</GameKeyboardKey>
      })}
    </div>
  </div>;
}

export default GameKeyboard;
