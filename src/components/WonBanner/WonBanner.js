import React from 'react';
import Banner from "../Banner";
import RestartGame from "../RestartGame";

function WonBanner({ guessCount, restartGame }) {
  return <Banner status="happy">
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{guessCount === 1 ? '1 guess' : `${guessCount} guesses`}</strong>.
    </p>
    <RestartGame handleRestart={restartGame} />
  </Banner>;
}

export default WonBanner;
