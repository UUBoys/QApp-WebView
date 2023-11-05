import { gql } from "@apollo/client";

export const TOPUPCREDITSMUTATION = gql`
  mutation TopupCredits($amount: Int!) {
    topupCredits(amount: $amount) {
      newBalance
      oldBalance
      success
    }
  }
`;
