import React from 'react';
import Banner from "../Banner";
import RestartGame from "../RestartGame";

function LostBanner({ answer, restartGame }) {
  return <Banner status="sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    <RestartGame handleRestart={restartGame} />
  </Banner>;
}

export default LostBanner;
