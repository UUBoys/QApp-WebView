import { gql } from "@apollo/client";

export const GET_ESTABLISHMENT = gql`
  query GetEstablishment($getEstablishmentId: Int) {
    getEstablishment(id: $getEstablishmentId) {
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
