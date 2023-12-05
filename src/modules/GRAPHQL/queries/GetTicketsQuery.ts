import { gql } from "@apollo/client";

export const GET_TICKETS = gql`
  query GetTickets {
    getTickets {
      id
      event_id
      name
      user_id
      amount
    }
  }
`;
