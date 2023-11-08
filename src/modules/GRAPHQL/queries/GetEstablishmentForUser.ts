import { gql } from "@apollo/client";

export const GET_ESTABLISHMENTS_FOR_USER = gql`
  query GetEstablishmentsForUser {
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
      }
      success
    }
  }
`;
