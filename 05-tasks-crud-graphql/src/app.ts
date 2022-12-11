import 'reflect-metadata';
import { startDatabase } from './database';
import { startServer } from './server';

startServer();
startDatabase();
