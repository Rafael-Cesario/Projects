import 'dotenv/config';

import { ApolloServer } from 'apollo-server';
import { connect } from 'mongoose';

import path from 'path';
import { buildSchema } from 'type-graphql';
import { authentication } from './middlewares/authentication';
import { AuthResolver } from './resolvers/auth';
import { UserResolver } from './resolvers/users';

const URI = `${process.env.DBURL}-${process.env.NODE_ENV?.trim()}`;

export const MongoDBServer = () => {
  connect(URI, () => {
    if (process.env.NODE_ENV != 'test') {
      console.log(`DB Connected on ${process.env.NODE_ENV?.trim()} enviroment\n`);
    }
  });
};

export const server = async () => {
  const schema = await buildSchema({
    emitSchemaFile: path.resolve(__dirname, 'types', 'schema.gql'),
    resolvers: [UserResolver, AuthResolver],
    authChecker: authentication,
  });

  const server = new ApolloServer({
    schema,
    formatError: (error) => new Error(error.message),
    context: ({ req }) => ({ req, token: req?.headers?.authorization }),
  });

  return server;
};
