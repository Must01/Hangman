const Head = (
  <div className="absolute h-20 top-9 -right-9 w-20 bg-transparent border-8 border-black rounded-full" />
);
const Body = <div className="absolute h-20 top-29 right-0 w-2.5 bg-black " />;
const RigthArm = (
  <div className="absolute h-2.5 rotate-12 top-29 right-0 w-20 bg-black " />
);
const LeftArm = (
  <div className="absolute h-20 rotate-70 top-19 -right-9 w-2.5 bg-black " />
);
const LeftLeg = (
  <div className="absolute h-2.5 -rotate-60 top-55 -right-3.5 w-20 bg-black " />
);
const RigthLeg = (
  <div className="absolute h-2.5 rotate-60 top-55 -right-14 w-20 bg-black " />
);

const bodyParts = [Head, Body, RigthArm, LeftArm, LeftLeg, RigthLeg];

type hangmanProps = {
  numGuess: number;
};

export function Hangman({ numGuess }: hangmanProps) {
  return (
    <div className="relative">
      {numGuess == 0 ? "" : bodyParts.slice(0, numGuess)}
      <div className="absolute ml-30 h-10 top-0 right-0 w-2.5 mx-auto bg-black" />
      <div className="ml-30 h-2.5 w-52 mx-auto bg-black" />
      <div className="h-90 w-2.5 ml-30 bg-black" />
      <div className="h-2.5 w-64 bg-black" />
    </div>
  );
}
