import React, { useState , useRef } from 'react';
import './Game.css'

export const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score }
) => {

    const [tryLetter, setTryLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLetter(tryLetter)
        setTryLetter("")
        letterInputRef.current.focus()
    }

    return (
        <section className='game'>
            <p className="points">
                <span>Score: {score}</span>
            </p>
            <h1>Guess the word!</h1>
            <h3 className='tip'>I'll give you a hint: <span>{pickedCategory}</span></h3>
            <p>You still have {guesses} chances</p>
            <div className='wordContainer'>
                {letters.map(
                    (l, i) => guessedLetters.includes(l) ? (
                        <span key={i} className='letter'>{l}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                )}
            </div>
            <div className='letterContainer'>
                <p>Try a letter</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='letter' 
                        maxLength="1" 
                        required onChange={(e) => setTryLetter(e.target.value)}
                        value={tryLetter}
                        ref={letterInputRef}
                    />
                    <button>Send</button>
                </form>
            </div>
            <div className='wrongLettersContainer'>
                <p>Already tried</p>
                {wrongLetters.map((l, i) => (<span key={i}>{l}, </span>))}
            </div>
        </section>
    );
};


export default Game;