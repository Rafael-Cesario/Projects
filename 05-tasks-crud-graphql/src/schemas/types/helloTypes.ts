import { gql } from 'graphql-tag';

export const helloType = gql`
	type Query {
		hello: String!
	}
`;
