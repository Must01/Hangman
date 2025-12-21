type wordProps = {
  reveal?: boolean;
  word: string;
  letters: string[];
};
export function Word({ reveal = false, word, letters }: wordProps) {
  const guessedLetters = letters;

  return (
    <div className="flex gap-2 text-5xl font-bold uppercase font-mono">
      {word.split("").map((lett, index) => (
        <span className="border-b-5 min-w-6.5 border-black" key={index}>
          <span
            className={`${
              guessedLetters.includes(lett) || reveal ? "block" : "hidden"
            } ${
              !guessedLetters.includes(lett) && reveal
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {lett}
          </span>
        </span>
      ))}
    </div>
  );
}
