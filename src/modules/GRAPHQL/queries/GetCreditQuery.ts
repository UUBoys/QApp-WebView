import { gql } from "@apollo/client";

export const GET_CREDIT = gql`
  query Query {
    getCredit {
      balance
    }
  }
`;
