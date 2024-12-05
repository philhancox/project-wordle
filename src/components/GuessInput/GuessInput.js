import React from 'react';
import '../../constants';
import {GUESS_LENGTH} from "../../constants";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('')

  return <div>
    <form className="guess-input-wrapper" onSubmit={(e) => {
        e.preventDefault()
        console.log({guess: guess})
        setGuess('')
        addGuess(guess)
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
          id="guess-input"
          type="text"
          value={guess}
          minLength={GUESS_LENGTH}
          maxLength={GUESS_LENGTH}
          title={GUESS_LENGTH + " letter word"}
          pattern={"[a-zA-Z]{" + GUESS_LENGTH + "}"}
          onChange={(e) => {
              let guess = e.target.value.toUpperCase()
              setGuess(guess)
          }}/>
    </form>
  </div>;
}

export default GuessInput;
