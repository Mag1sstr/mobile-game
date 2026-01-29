import clsx from "clsx";
import { useState } from "react";
interface IModes {
  id: "shake" | "adventure";
  name: string;
}
const MODES: IModes[] = [
  { id: "shake", name: "Shake mode" },
  { id: "adventure", name: "Adventure mode" },
];

function SwitchMode() {
  const [currentMode, setCurrentMode] = useState<"shake" | "adventure">(
    "shake",
  );

  return (
    <ul className="relative px-5 py-3 rounded-xl bg-black/30">
      <div className="rounded-[72px] flex overflow-hidden bg-black">
        {MODES.map((mode) => (
          <li
            key={mode.id}
            onClick={() => setCurrentMode(mode.id)}
            className={clsx(
              "relative bebas z-0  text-center py-4 flex-1 text-[20px]  uppercase whitespace-nowrap transition-all  ",
              currentMode === mode.id
                ? "text-white bgPurple  rounded-[72px] px-10  [&>p]:scale-130"
                : " text-[#5C5C5C] ",
            )}
          >
            {/* <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                fill: "none",
                stroke: "#fff",
                strokeDasharray: "150 480",
                strokeDashoffset: 150,
                transition: "1s ease-in-out",
              }}
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg> */}
            <p>{mode.name}</p>
          </li>
        ))}
      </div>
      {/* <div
        className={clsx(
          "ml-auto bebas z-10 px-13.75 bg-black text-center py-4 rounded-[72px] text-[20px] spacing text-[#5C5C5C] uppercase whitespace-nowrap",
          currentMode === "adventure" && "text-white bgPurple",
        )}
      >
        Adventure mode
      </> */}
    </ul>
  );
}

export default SwitchMode;
