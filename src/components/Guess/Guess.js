import React from 'react';
import '../../constants';
import {GUESS_LENGTH} from "../../constants";
import {range} from "../../utils";

function Guess({guess}) {
  return <p className="guess">
        {range(0, GUESS_LENGTH).map((i) => {
            return <span className="cell" key={i}>{guess ? guess[i] : ''}</span>
        })}
      </p>;
}

export default Guess;
