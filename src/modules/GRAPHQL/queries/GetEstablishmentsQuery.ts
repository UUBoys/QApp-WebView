import { gql } from "@apollo/client";

export const GET_ESTABLISHMENTS = gql`
  query GetEstablishments {
    getEstablishments {
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
        }
      }
    }
  }
`;
