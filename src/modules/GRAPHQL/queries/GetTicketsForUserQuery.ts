import { gql } from "@apollo/client";

export const GET_TICKETS_FOR_USER = gql`
  query GetTicketsForUser {
    getTicketsForUser {
      user_id
      ticket_id
      event_id
      ticket_name
      price
      bought_quantity
    }
  }
`;
