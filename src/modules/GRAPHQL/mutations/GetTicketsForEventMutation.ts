import { gql } from "@apollo/client";

export const GET_TICKETS_FOR_EVENT = gql`
  query Query($eventId: String!) {
    getTicketsForEvent(event_id: $eventId) {
      ticket_id
      event_id
      ticket_name
      price
      available_quantity
    }
  }
`;
