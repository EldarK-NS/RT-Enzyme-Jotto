import logo from "./logo.svg";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        // guessedWords={[]}
      />
    </div>
  );
}

export default App;
