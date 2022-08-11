import 'dotenv/config';

import { mongoDBConnect } from './database';
import { app } from './app';

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log({ port: `http://localhost:${PORT}` });
	mongoDBConnect();
});
