/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

type UserAdditionalDataState = {
  credits: number;
  setCredits: (credits: number) => void;
};

export const useUserAdditionalDataStore = create<UserAdditionalDataState>(
  (set, _get) => ({
    credits: 0,
    setCredits: (credits: number) => set({ credits }),
  })
);
