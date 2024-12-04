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
      <input id="guess-input" type="text" value={guess} onChange={(e) => {
        let guess = e.target.value
        if (guess.length > 0) {
          guess = guess.toUpperCase()
        }
        setGuess(guess)
      }}/>
    </form>
  </div>;
}

export default GuessInput;
