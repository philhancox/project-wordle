import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('')

  return <div>
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault()
      console.log({guess: guess})
      setGuess('')
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
          id="guess-input"
          type="text"
          value={guess}
          minLength={5}
          maxLength={5}
          title="5 letter word"
          pattern="[a-zA-Z]{5}"
          onChange={(e) => {
            let guess = e.target.value.toUpperCase()
            setGuess(guess)
          }}/>
    </form>
  </div>;
}

export default GuessInput;
