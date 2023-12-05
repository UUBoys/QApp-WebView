import { gql } from "@apollo/client";

export const GET_TICKETS_FOR_USER = gql`
  query GetTicketsForUser {
    getTicketsForUser {
      id
      event_id
      name
      user_id
      amount
    }
  }
`;
