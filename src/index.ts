import 'dotenv/config';
import 'reflect-metadata';
import './server';

import { MongoDBServer, server } from './server';

const Main = async () => {
  const client = await server();

  const { url } = await client.listen();
  MongoDBServer();

  if (process.env.NODE_ENV != 'test') console.log({ url });
};

Main();

