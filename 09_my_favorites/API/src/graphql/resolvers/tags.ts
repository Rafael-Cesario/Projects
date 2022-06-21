import { allTagsOnDB, createNewTagOnDB } from "../../database/methods/tags";
import { Tag } from "../../types/tags";

export const resolvers = {
	Query: {
		tags() {
			const allTags = allTagsOnDB();
			return allTags;
		},
	},

	Mutation: {
		createNewTag(obj: unknown, args: Tag) {
			const { name, tags } = args;

			const newTag = createNewTagOnDB(name, tags);

			return newTag;
		},
	},
};
