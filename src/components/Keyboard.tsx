const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type keyBoardProps = {
  disable?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  disable = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: keyBoardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="grid grid-cols-7 sm:grid-cols-9 md:grid-cols-13 gap-2">
        {KEYS.map((letter) => {
          const isActive = activeLetters.includes(letter);
          const isInactive = inactiveLetters.includes(letter);

          return (
            <button
              onClick={() => addGuessedLetter(letter)}
              className={`letter ${isActive ? "active" : ""} ${
                isInactive ? "inactive" : ""
              }`}
              key={letter}
              disabled={isInactive || isActive || disable}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
