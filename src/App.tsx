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
    <div className="bg-white flex flex-col items-center gap-8 my-0 mx-auto  max-w-3xl ">
      <div className="text-[2rem] text-center font-bold">
        {isWinner && "Winner 😀 Refresh to try again!"}
        {isLost && `You lost 🥹 the word was ${word} Refresh to try again!`}
      </div>
      <Hangman numGuess={IncorrectLetters.length} />
      <Word reveal={isLost} word={word} letters={letters} />
      <Keyboard
        disable={isWinner || isLost}
        activeLetters={letters.filter((lett) => word.includes(lett))}
        inactiveLetters={IncorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}

export default App;
