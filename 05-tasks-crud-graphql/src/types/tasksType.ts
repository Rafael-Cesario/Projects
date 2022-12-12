import { gql } from 'graphql-tag';

export const tasksType = gql`
	type Query {
		hello: String!
	}
`;
