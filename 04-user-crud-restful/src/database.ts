import 'dotenv/config';

let database = process.env.DATABASE;
if (process.env.NODE_ENV === 'test') database = 'test';

export const uri = `mongodb://localhost:27017/${database}`;
