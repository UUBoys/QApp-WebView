import { gql } from "@apollo/client";

export const PURCHASE_TICKET = gql`
  mutation PurchaseTicket($eventId: String!, $userId: Int!) {
    purchaseTicket(event_id: $eventId, user_id: $userId) {
      ticket {
        id
        event_id
        name
        user_id
        amount
      }
    }
  }
`;
