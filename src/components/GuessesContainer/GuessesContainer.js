import React from 'react';
import '../../data';
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import Guess from "../Guess";

function GuessesContainer({ guesses, answer }) {

  return <div>
    <div className="guess-results">
      {range(0, (NUM_OF_GUESSES_ALLOWED)).map((i) => {
        return <Guess key={i} guess={guesses[i] ? guesses[i].guess : null} answer={answer} />
      })}
    </div>
  </div>;
}

export default GuessesContainer;
