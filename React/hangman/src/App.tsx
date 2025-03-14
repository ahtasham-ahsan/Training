import { useState } from "react"
import words from "./wordList.json"

function App(){
  const [wordToGuess, setWordToGuess] = useState(() =>{
    return words[Math.floor(Math.random() * words.length)]
  }); 
  const [guessedLetters, setGuessedLetter] = useState<string[]>([ ])
  console.log(wordToGuess)
  const winner = true;
  return (
    <div style={{
      maxWidth: "800px", 
      display: "flex", 
      flexDirection: "column", 
      gap: "2rem", 
      margin: "0 auto", 
      alignItems: "center"
    }}> 
    
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      <h3 className={`${winner} ? win: lose`}>Win / Lose </h3>
    </div>

    </div>
  )
}

export default App 