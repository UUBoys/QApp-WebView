import { gql } from "@apollo/client";

export const GET_ESTABLISHMENTS_FOR_USER = gql`
  query Establishments {
    getEstablishmentsForUser {
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
      success
    }
  }
`;
