import type { ReactNode } from "react";

function BackgroundWithStars({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen bg-(--bg) px-4 pt-4 pb-10 text-white overflow-hidden ">
      {/* Это анимация звезд */}
      <div
        className="
      absolute inset-0
      bg-[url('/stars.png')] bg-repeat
      opacity-20
      animate-[twinkle_4s_ease-in-out_infinite]
    "
      />
      <div
        className="
      absolute inset-0
      bg-[url('/stars.png')] bg-repeat
      opacity-10
      animate-[twinkle_7s_ease-in-out_infinite]
    "
      />
      {children}
    </div>
  );
}

export default BackgroundWithStars;
