import { gql } from "@apollo/client";

export const GET_EVENT_BY_ID = gql`
  query GetEventById($getEventByIdId: String!) {
    getEventById(id: $getEventByIdId) {
      events {
        id
        name
        description
        start_date
        end_date
        price
        establishment_id
        maximumCapacity
        image
        tickets {
          ticket_id
          event_id
          ticket_name
          price
          available_quantity
        }
      }
    }
  }
`;
