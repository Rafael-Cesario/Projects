import { gql } from "@apollo/client";

export const lists = gql`
	query Lists {
		lists {
			index
			name
			tags
		}
	}
`;
