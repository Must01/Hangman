import { useCallback, useEffect, useState } from "react";

// import the words json file
import words from "./wordList.json";

// import components :
import { Hangman } from "./components/Hangman";
import { Word } from "./components/Word";
import { Keyboard } from "./components/Keyboard";

function App() {
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  const [word, setWord] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]; // we multiplay by the length so we don't get number not in the list
  });

  const [letters, setLetters] = useState<string[]>([]);
  const IncorrectLetters = letters.filter((letter) => !word.includes(letter));

  const isLost = IncorrectLetters.length > 6;
  const isWinner = word.split("").every((letter) => letters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (letters.includes(letter)) return;
      setLetters((oldLetters) => [...oldLetters, letter]);
    },
    [letters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [letters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setLetters([]);
      setWord(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-slate-800 mb-2">Hangman</h1>
          <p className="text-slate-600">Guess the word, one letter at a time</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          {(isWinner || isLost) && (
            <div
              className={`mb-6 p-6 rounded-xl text-center text-xl font-semibold ${
                isWinner
                  ? "bg-green-100 text-green-800 border-2 border-green-300"
                  : "bg-red-100 text-red-800 border-2 border-red-300"
              }`}
            >
              {isWinner && "Congratulations! You Won!"}
              {isLost && (
                <>
                  Game Over! The word was <span className="font-bold">{word}</span>
                </>
              )}
              <div className="mt-3 text-base text-slate-600">
                Press <kbd className="px-2 py-1 bg-white rounded border shadow-sm">Enter</kbd> to
                play again
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
            <Hangman numGuess={IncorrectLetters.length} />
            <div className="flex-1 flex items-center justify-center">
              <Word reveal={isLost} word={word} letters={letters} />
            </div>
          </div>

          {IncorrectLetters.length > 0 && (
            <div className="mb-6 text-center">
              <p className="text-sm text-slate-600 mb-2">Incorrect guesses:</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {IncorrectLetters.map((letter) => (
                  <span
                    key={letter}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-lg font-medium"
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <Keyboard
          disable={isWinner || isLost}
          activeLetters={letters.filter((lett) => word.includes(lett))}
          inactiveLetters={IncorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
