import React from 'react';
import '../../constants';
import {GUESS_LENGTH} from "../../constants";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";
import GuessLetter from "../GuessLetter";

function Guess({ guess, answer }) {

    const results = checkGuess(guess, answer)

    return <p className="guess">
        {results !== null ? results.map((letter, index) => {
            return <GuessLetter key={index} letter={letter.letter} status={letter.status} />
        }) : range(0, GUESS_LENGTH).map((i) => {
            return <GuessLetter key={i} letter={''} status="empty" />
        })}
      </p>;
}

export default Guess;
