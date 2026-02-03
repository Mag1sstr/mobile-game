import { create } from "zustand";

interface IScoreStore {
  score: number;
  incScore: () => void;
}

export const useScore = create<IScoreStore>((set) => ({
  score: 0,
  incScore: () => set((state) => ({ score: state.score + 1 })),
}));
