import { gql } from "@apollo/client";

export const allTagsOnDB = gql`
	query AllTags {
		tags {
			name
			tags
		}
	}
`;

export const saveNewTagOnDB = gql`
	mutation createNewTag($name: String, $tags: [String]) {
		createNewTag(name: $name, tags: $tags) {
			name
			tags
		}
	}
`;
