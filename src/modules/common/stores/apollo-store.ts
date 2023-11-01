import { create } from "zustand";

type ApolloStatusState = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
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
