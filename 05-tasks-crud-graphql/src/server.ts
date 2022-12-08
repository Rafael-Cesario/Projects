import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { TasksResolver } from './resolvers/tasksResolver';

const app = express();
const PORT = process.env.PORT || 4000;

export const startServer = async () => {
	const schema = await buildSchema({
		resolvers: [TasksResolver],
	});

	app.use(
		'/graphql',
		graphqlHTTP({
			schema,
			graphiql: true,
		})
	);

	app.listen(PORT);
	console.log('Graphql running http://localhost:4000/graphql');
};
