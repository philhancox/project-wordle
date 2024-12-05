import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessesContainer from "../GuessesContainer";
import {GAME_STATUS_IN_PLAY, GAME_STATUS_LOST, GAME_STATUS_WON, NUM_OF_GUESSES_ALLOWED} from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import GameKeyboard from "../GameKeyboard";
import {checkGuess} from "../../game-helpers";



function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS)
    console.info({ answer });
    return answer;
  })
  const [guesses, setGuesses] = React.useState([])
  const [status, setStatus] = React.useState(() => {
    return GAME_STATUS_IN_PLAY
  })
  const [gameComplete, setGameComplete] = React.useState(false)
  const [letters, setLetters] = React.useState([])

  function addGuess(guess) {
    const totalGuesses = [...guesses, {id: Math.random(), guess}]
    setGuesses(totalGuesses)
    updateStatus(guess, totalGuesses)
    const lettersArray = [];
    if (totalGuesses.length > 0) {
      totalGuesses.forEach((guess) => {
        const guessResult = checkGuess(guess.guess, answer)
        guessResult.forEach(function (result) {
          // Don't override if it's already correct
          if (lettersArray[result.letter] !== 'correct') {
            lettersArray[result.letter] = result.status;
          }
        })
      })
      setLetters(lettersArray);
    }

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

  function restartGame() {
    const answer = sample(WORDS)
    setAnswer(answer)
    setGameComplete(false)
    setGuesses([])
    setStatus(GAME_STATUS_IN_PLAY)
    setLetters([])
    // To make debugging easier, we'll log the solution in the console.
    console.info({answer});
  }



  return <>
    {status === GAME_STATUS_WON && <WonBanner guessCount={guesses.length} restartGame={restartGame} />}
    {status === GAME_STATUS_LOST && <LostBanner answer={answer} restartGame={restartGame} />}
    <GuessesContainer guesses={guesses} answer={answer} />
    <GameKeyboard letters={letters} />
    <GuessInput addGuess={addGuess} gameComplete={gameComplete} />
  </>;
}

export default Game;
