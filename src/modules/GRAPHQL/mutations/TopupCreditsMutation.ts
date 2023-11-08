import { gql } from "@apollo/client";

export const TOPUPCREDITSMUTATION = gql`
  mutation Mutation($amount: Int!) {
    topupCredits(amount: $amount) {
      newBalance
      success
      oldBalance
    }
  }
`;
