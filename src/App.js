import { useEffect } from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "./actions";

function App() {
  //TODO: get props from shared state
  const success = false;
  const secretWord = "party";
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className='container' data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords
        // guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        guessedWords={guessedWords}
      />
    </div>
  );
}

export default App;
