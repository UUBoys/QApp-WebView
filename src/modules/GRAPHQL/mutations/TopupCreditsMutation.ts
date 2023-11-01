import { gql } from "@apollo/client";

export const TOPUPCREDITSMUTATION = gql`
  mutation Mutation($topupCreditsAmount2: Int) {
    topupCredits(amount: $topupCreditsAmount2) {
      newBalance
      oldBalance
      success
    }
  }
`;
