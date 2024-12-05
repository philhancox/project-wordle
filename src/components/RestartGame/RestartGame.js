import React from 'react';

// @todo Doubt this is best approach but preferable for DRY
function RestartGame({ handleRestart}) {

  // This would be a button component in realtiy
  return <div>
    <button className="button" onClick={handleRestart}>Click here to start a new game</button>
  </div>;
}

export default RestartGame;
