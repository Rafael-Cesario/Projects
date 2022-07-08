import 'reflect-metadata';
import './database';

import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { UserResolver } from './graphql/resolvers/users';

const Main = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'graphql', 'types', 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
    formatError: (error) => new Error(error.message),
  });

  const { url } = await server.listen();
  console.log(`${url}\n`);
};

Main();
