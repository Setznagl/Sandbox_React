import React from 'react';
import "./StartScreen.css"

export const StartScreen = ( {startGame} ) => {
  return (
    <section className='start'>
        <h1>Secret Word</h1>
        <p>Guess what is the word!</p>
        <button onClick={startGame}>Start</button>
    </section>
  );
};


export default StartScreen;