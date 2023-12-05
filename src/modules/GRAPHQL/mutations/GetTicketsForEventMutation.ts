import { gql } from "@apollo/client";

export const GET_TICKETS_FOR_EVENT = gql`
  mutation GetTicketsForEvent($eventId: String!) {
    getTicketsForEvent(event_id: $eventId) {
      id
      event_id
      name
      user_id
      amount
    }
  }
`;
