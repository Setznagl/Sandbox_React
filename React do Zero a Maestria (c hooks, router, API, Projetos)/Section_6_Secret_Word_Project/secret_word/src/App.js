//CSS
import './App.css';
//Components
import StartScreen from './Components/StartScreen';
import Game from './Components/Game'
import GameOver from './Components/GameOver'
//Hooks
import { useEffect, useState, useCallback } from 'react';
//Data
import { wordsList } from './data/words'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);
  const [pickedWord , setPickedWord] = useState("")
  const [pickedCategory , setPickedCategory] = useState("")
  const [letters , setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback( () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]  
    return {word , category}  
  }, [words])

  const startGame = useCallback( () => {
    clearLetterStates()
    //pick word and category 
    const { word, category } = pickWordAndCategory()
    //Array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map( (l)=>l.toLowerCase() )  
    //set states
    setLetters(wordLetters)
    setPickedWord(word)
    setPickedCategory(category)

    setGameStage(stages[1].name)
  } , [pickWordAndCategory]);

  const verifyLetter = (tryLetter) => {
    tryLetter = tryLetter.toLowerCase()

    if(
      guessedLetters.includes(tryLetter) ||
      wrongLetters.includes(tryLetter)
    ){return}

    if (letters.includes(tryLetter)) {
      setGuessedLetters(
        (prev) => [...prev , tryLetter] 
      )
    } else {
      setWrongLetters(
        (prev) => [...prev , tryLetter]
      )
      setGuesses((prev) => prev = prev -1)
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(
    () => {

      if(guesses <= 0){
        //resetar states
        clearLetterStates();

        setGameStage(stages[2].name)
      }

    }, [guesses]
  )

  useEffect(
    () => {

      const uniqueLetters = [...new Set(letters)]
      if(guessedLetters.length === uniqueLetters.length){
        setScore((prev) => prev = prev + 100)
        startGame();
      }

    }, [guessedLetters , letters , startGame]
  )
  
  const retryGame = () => {
    setScore(0)
    setGuesses(3)

    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game 
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === 'end' && <GameOver retryGame={retryGame} score={score}/>}
    </div>
  );
}

export default App;
