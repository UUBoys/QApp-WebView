import { gql } from "@apollo/client";

export const CREATE_ESTABLISHMENT_MUTATION = gql`
  mutation Mutation(
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
      }
      success
    }
  }
`;
