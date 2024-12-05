import React from 'react';

function GuessesContainer({ guesses }) {
  return <div>
    <div className="guess-results">
      {guesses.map(({guess, id}) => {
        return <p className="guess" key={id}>{ guess }</p>
      })}
    </div>
  </div>;
}

export default GuessesContainer;
