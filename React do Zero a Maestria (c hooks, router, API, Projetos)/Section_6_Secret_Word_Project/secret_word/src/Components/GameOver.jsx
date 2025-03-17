import React from 'react';


export const GameOver = ( {retryGame , score} ) => {
  return (
    <section>
      <h1>You lose!</h1>
      <h2>
        Score achieved
        <span>  {score}</span>
      </h2>
      <button onClick={retryGame}>Retry</button>
    </section>
  );
};


export default GameOver;