import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation Createuser($user: CreateUserInput!) {
    createUser(user: $user) {
      _id
      name
      password
    }
  }
`;

export const LOGIN = gql`
  mutation Login($password: String!, $name: String!) {
    login(password: $password, name: $name) {
      token
      user {
        _id
        name
        password
      }
    }
  }
`;

export const USERS = gql`
  query Users {
    users {
      _id
      name
      password
    }
  }
`;
