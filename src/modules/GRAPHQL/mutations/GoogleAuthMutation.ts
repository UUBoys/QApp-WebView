import { gql } from "@apollo/client";

export const GOOGLE_AUTH_MUTATION = gql`
  mutation Mutation($idToken: String!) {
    googleOAuth(idToken: $idToken) {
      success
      token
    }
  }
`;
