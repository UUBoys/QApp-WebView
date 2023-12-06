/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

import { IClub } from "@/modules/utils/schemas/club";
import { ITicket } from "@/modules/utils/schemas/ticket";

type UserAdditionalDataState = {
  credits: number;
  userOwnedTickets: ITicket[];
  setUserOwnedTickets: (tickets: ITicket[]) => void;
  setCredits: (credits: number) => void;
  userOwnedClubs: IClub[];
  setUserOwnedClubs: (clubs: IClub[]) => void;
};

export const useUserAdditionalDataStore = create<UserAdditionalDataState>(
  (set, _get) => ({
    credits: 0,
    setCredits: (credits: number) => set({ credits }),
    userOwnedTickets: [],
    setUserOwnedTickets: (tickets: ITicket[]) =>
      set({ userOwnedTickets: tickets }),
    userOwnedClubs: [],
    setUserOwnedClubs: (clubs: IClub[]) => set({ userOwnedClubs: clubs }),
  })
);
