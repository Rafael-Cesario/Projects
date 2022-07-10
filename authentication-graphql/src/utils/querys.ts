import { ApolloServer, gql } from 'apollo-server';
import { IUser } from '../models/users';

interface MutationLogin {
  data: {
    login: {
      token: string;
      user: IUser;
    };
  };
  errors: { message: string }[];
}

interface QueryCreateUser {
  data: { createUser: IUser };
  errors: { message: string }[];
}

interface QueryUsers {
  data: {
    users: IUser[];
  };
  errors: { message: string }[];
}

// Querys

export const CREATEUSER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      _id
      name
      password
    }
  }
`;

export const LOGIN = gql`
  mutation Login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
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
  query Users{
    users {
      _id
      name
      password
    }
  }
`;

// Exec Querys

export const createUser = async (
  user: { name: string; password: string },
  client: ApolloServer
) => {
  const createUserResponse = (await client.executeOperation({
    query: CREATEUSER,
    variables: { user },
  })) as QueryCreateUser;

  return createUserResponse;
};

export const doLogin = async (user: { name: string; password: string }, client: ApolloServer) => {
  const loginResponse = await client.executeOperation({
    query: LOGIN,
    variables: { name: user.name, password: user.password },
  });

  return loginResponse as MutationLogin;
};

export const queryUsers = async (client: ApolloServer) => {
  const queryResponse = await client.executeOperation({ query: USERS });
  return queryResponse as QueryUsers;
};
