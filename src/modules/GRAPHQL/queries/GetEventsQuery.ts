import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query Events {
    getEvents {
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
      }
    }
  }
`;
