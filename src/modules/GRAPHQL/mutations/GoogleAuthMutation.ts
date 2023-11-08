import { gql } from "@apollo/client";

export const GOOGLE_AUTH_MUTATION = gql`
  mutation GoogleOAuth($idToken: String!) {
    googleOAuth(idToken: $idToken) {
      token
    }
  }
`;
