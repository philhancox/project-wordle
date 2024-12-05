import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessesContainer from "../GuessesContainer";
import {GAME_STATUS_IN_PLAY, GAME_STATUS_LOST, GAME_STATUS_WON, NUM_OF_GUESSES_ALLOWED} from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [status, setStatus] = React.useState(() => {
    return GAME_STATUS_IN_PLAY
  })
  const [gameComplete, setGameComplete] = React.useState(false)

  function addGuess(guess) {
    const totalGuesses = [...guesses, {id: Math.random(), guess}]
    setGuesses(totalGuesses)
    updateStatus(guess, totalGuesses)
  }

  function updateStatus(guess, guesses) {
    if (guess === answer) {
      setStatus(GAME_STATUS_WON)
      setGameComplete(true)
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus(GAME_STATUS_LOST)
      setGameComplete(true)
    }
  }

  return <>
    {status === GAME_STATUS_WON && <WonBanner guessCount={guesses.length} />}
    {status === GAME_STATUS_LOST && <LostBanner answer={answer} />}
    <GuessesContainer guesses={guesses} answer={answer} />
    <GuessInput addGuess={addGuess} gameComplete={gameComplete} />
  </>;
}

export default Game;
