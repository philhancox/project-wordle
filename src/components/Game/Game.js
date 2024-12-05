import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessesContainer from "../GuessesContainer";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function addGuess(guess) {
    setGuesses([...guesses, {id: Math.random(), guess}])
  }

  return <>
    <GuessesContainer guesses={guesses} />
    <GuessInput addGuess={addGuess} />
  </>;
}

export default Game;
