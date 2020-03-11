import { gql } from "apollo-boost";
export const SAY_HELLO = gql`
  query {
    sayHello(name: "짬뽕") {
      success
      error
      data
    }
  }
`;
export const SIGN_UP = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      success
      error
      data {
        _id
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`;
