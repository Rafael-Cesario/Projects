import { gql } from "@apollo/client";

export const ALL_TAGS = gql`
	query AllTags {
		tags {
			name
			tags
		}
	}
`;

export const NEW_TAG = gql`
	mutation createNewTag($name: String, $tags: [String]) {
		createNewTag(name: $name, tags: $tags) {
			name
			tags
		}
	}
`;
