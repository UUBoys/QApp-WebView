import { gql } from "@apollo/client";

export const GET_ESTABLISHMENT_BY_ID = gql`
  query GetEstablishmentById($getEstablishmentByIdId: String!) {
    getEstablishmentById(id: $getEstablishmentByIdId) {
      establishments {
        id
        name
        description
        street
        city
        country
        coverImage
        profileImage
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
  }
`;
