import { gql } from "@apollo/client";

export const CREATE_ESTABLISHMENT_MUTATION = gql`
  mutation Mutation(
    $country: String
    $city: String
    $street: String
    $description: String
    $name: String
  ) {
    createEstablishment(
      country: $country
      city: $city
      street: $street
      description: $description
      name: $name
    ) {
      establishment {
        city
        country
        description
        id
        name
        street
      }
      success
    }
  }
`;
