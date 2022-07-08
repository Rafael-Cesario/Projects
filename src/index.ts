import 'reflect-metadata';
import './database';

import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { UserResolver } from './graphql/resolvers/users';
import { AuthResolver } from './graphql/resolvers/auth';
import { authentication } from './graphql/middlewares/authentication';

const Main = async () => {
  const schema = await buildSchema({
    emitSchemaFile: path.resolve(__dirname, 'graphql', 'types', 'schema.gql'),
    resolvers: [UserResolver, AuthResolver],
    authChecker: authentication,
  });

  const server = new ApolloServer({
    schema,
    formatError: (error) => new Error(error.message),
    context: ({ req }) => ({ req, token: req?.headers?.authorization }),
  });

  const { url } = await server.listen();
  console.log(`${url}\n`);
};

Main();
