import { gql } from "@apollo/client";

export const SEARCH_MUTATION = gql`
  mutation Search($query: String!, $type: SearchType!) {
    search(query: $query, type: $type) {
      results {
        searchType
        result {
          ... on Event {
            id
            name
            description
            start_date
            end_date
            price
            establishment_id
            maximumCapacity
          }
          ... on Establishment {
            id
            name
            description
            street
            city
            country
            coverImage
            profileImage
          }
        }
      }
    }
  }
`;
