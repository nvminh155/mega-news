import { useState } from "react";

import Mood from "./Mood";

const moods = [
  {
    name: "lucide:angry",
    color: "#FC5C65",
    text: "Angry",
  },
  {
    name: "lets-icons:sad",
    color: "#FA8231",
    text: "Bad",
  },
  {
    name: "zondicons:mood-neutral-outline",
    color: "#F7B731",
    text: "Neutral",
  },
  {
    name: "zondicons:mood-happy-outline",
    color: "#45AAF2",
    text: "Happy",
  },
  {
    name: "hugeicons:in-love",
    color: "#26DE81",
    text: "Good",
  },
];

const Rate = () => {
  const [activeMood, setActiveMood] = useState(moods[moods.length - 1].name);

  return (
    <div className="flex flex-1 items-center justify-between rounded-md bg-accent-gray p-[4px] pl-[12px]">
      <span className="font-medium text-tertiary">
        Rate the usefulness of the article
      </span>
      <div className="mood flex items-center gap-0.5">
        {moods.map((m) => (
          <Mood
            key={m.name}
            active={m.name === activeMood}
            {...m}
            onChangeMood={(name) => setActiveMood(name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Rate;
