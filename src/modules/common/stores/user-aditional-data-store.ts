/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

import { IClub } from "@/modules/utils/schemas/club";

type UserAdditionalDataState = {
  credits: number;
  setCredits: (credits: number) => void;
  userOwnedClubs: IClub[];
  setUserOwnedClubs: (clubs: IClub[]) => void;
};

export const useUserAdditionalDataStore = create<UserAdditionalDataState>(
  (set, _get) => ({
    credits: 0,
    setCredits: (credits: number) => set({ credits }),
    userOwnedClubs: [],
    setUserOwnedClubs: (clubs: IClub[]) => set({ userOwnedClubs: clubs }),
  })
);
