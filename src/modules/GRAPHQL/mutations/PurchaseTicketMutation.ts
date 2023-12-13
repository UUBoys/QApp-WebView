import { gql } from "@apollo/client";

export const PURCHASE_TICKET = gql`
  mutation PurchaseTicket($eventId: String!, $ticketId: String!) {
    purchaseTicket(event_id: $eventId, ticket_id: $ticketId) {
      new_balance
      event_id
    }
  }
`;
