const Head = (
  <div className="absolute h-16 w-16 border-4 border-slate-700 rounded-full top-12 -right-8 animate-fadeIn" />
);
const Body = (
  <div className="absolute h-24 w-2 bg-slate-700 top-28 right-0 animate-fadeIn" />
);
const RightArm = (
  <div className="absolute h-2 w-16 bg-slate-700 rotate-[30deg] origin-left top-32 right-0 animate-fadeIn" />
);
const LeftArm = (
  <div className="absolute h-2 w-16 bg-slate-700 -rotate-[30deg] origin-right top-32 -right-16 animate-fadeIn" />
);
const RightLeg = (
  <div className="absolute h-2 w-20 bg-slate-700 rotate-[60deg] origin-left top-52 right-0 animate-fadeIn" />
);
const LeftLeg = (
  <div className="absolute h-2 w-20 bg-slate-700 -rotate-[60deg] origin-right top-52 -right-20 animate-fadeIn" />
);

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type hangmanProps = {
  numGuess: number;
};

export function Hangman({ numGuess }: hangmanProps) {
  return (
    <div className="relative w-64 h-80">
      {bodyParts.slice(0, numGuess)}

      <div className="absolute top-0 left-28 w-2 h-12 bg-slate-700" />
      <div className="absolute top-0 left-28 w-32 h-2 bg-slate-700" />
      <div className="absolute top-0 right-8 w-2 h-64 bg-slate-700" />
      <div className="absolute bottom-16 right-0 w-48 h-2 bg-slate-700" />
    </div>
  );
}
