import { create } from "zustand";

import { LoadingType } from "@/modules/helpers/loader-helpers";

type ApolloStatusState = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  loadingType?: LoadingType;
};

type ApolloStatusActions = {
  setStatus: (status: Partial<ApolloStatusState>) => void;
};
export const useApolloStatusStore = create<
  ApolloStatusState & ApolloStatusActions
>((set) => ({
  isLoading: false,
  isError: false,
  isSuccess: false,
  setStatus: (status) => set((state) => ({ ...state, ...status })),
}));
