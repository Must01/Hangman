type wordProps = {
  reveal?: boolean;
  word: string;
  letters: string[];
};
export function Word({ reveal = false, word, letters }: wordProps) {
  const guessedLetters = letters;

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {word.split("").map((lett, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center w-12 h-16 sm:w-16 sm:h-20"
        >
          <div className="absolute bottom-0 w-full h-1 bg-slate-300 rounded-full" />
          <span
            className={`text-4xl sm:text-5xl font-bold uppercase transition-all duration-300 ${
              guessedLetters.includes(lett) || reveal
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0"
            } ${
              !guessedLetters.includes(lett) && reveal
                ? "text-red-500"
                : "text-slate-800"
            }`}
          >
            {lett}
          </span>
        </div>
      ))}
    </div>
  );
}
