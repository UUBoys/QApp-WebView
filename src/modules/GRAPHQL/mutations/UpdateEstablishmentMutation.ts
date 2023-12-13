import { gql } from "@apollo/client";

export const UPDATE_ESTABLISHMENT_MUTATION = gql`
  mutation UpdateEstablishment(
    $establishmentId: String!
    $name: String
    $description: String
    $street: String
    $city: String
    $country: String
    $coverImage: String
    $profileImage: String
  ) {
    updateEstablishment(
      establishment_id: $establishmentId
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
          image
        }
      }
    }
  }
`;
