import { gql } from "@apollo/client";

export const ALLTAGS = gql`
	query AllTags {
		tags {
			name
			tags
		}
	}
`;
