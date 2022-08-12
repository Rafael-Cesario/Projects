import 'dotenv/config';

import { mongoDBConnect } from './configs/database';
import { app } from './configs/app';

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log({ port: `http://localhost:${PORT}` });
	mongoDBConnect();
});
