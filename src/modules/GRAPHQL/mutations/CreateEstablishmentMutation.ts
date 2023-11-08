import { gql } from "@apollo/client";

export const CREATE_ESTABLISHMENT_MUTATION = gql`
  mutation CreateEstablishment(
    $name: String!
    $description: String!
    $street: String!
    $city: String!
    $country: String!
    $coverImage: String
    $profileImage: String
  ) {
    createEstablishment(
      name: $name
      description: $description
      street: $street
      city: $city
      country: $country
      coverImage: $coverImage
      profileImage: $profileImage
    ) {
      establishment {
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
