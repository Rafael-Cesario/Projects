import 'dotenv/config';
import 'reflect-metadata';
import './server';

import { MongoDBServer, server } from './server';

const Main = async () => {
  MongoDBServer();

  const client = await server();
  const { url } = await client.listen();

  if (process.env.NODE_ENV != 'test') console.log({ url });
};

Main();
