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
    <div className="self-stretch grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))]  gap-2">
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
  );
}
