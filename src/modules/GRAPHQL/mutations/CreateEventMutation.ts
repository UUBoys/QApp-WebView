import { gql } from "@apollo/client";

export const CREATE_EVENT_MUTATION = gql`
  mutation CreateEvent(
    $name: String!
    $description: String!
    $startDate: String!
    $endDate: String!
    $price: Float!
    $establishmentId: String!
    $maximumCapacity: Int!
    $image: String
  ) {
    createEvent(
      name: $name
      description: $description
      start_date: $startDate
      end_date: $endDate
      price: $price
      establishment_id: $establishmentId
      maximumCapacity: $maximumCapacity
      image: $image
    ) {
      event {
        id
        name
        description
        end_date
        establishment_id
        maximumCapacity
        image
        price
        start_date
      }
    }
  }
`;
