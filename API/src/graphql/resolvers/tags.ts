import { DBcreateTag } from "../../database/methods/lists/tags/createTag";
import { DBdeleteTag } from "../../database/methods/lists/tags/deleteTag";
import { DBmodifyTag } from "../../database/methods/lists/tags/modifyTag";
import { DBreorderTags } from "../../database/methods/lists/tags/reorderTags";

export const resolvers = {
	Mutation: {
		createTag(obj: unknown, args: { listName: string; tagName: string }) {
			if (args.tagName.toUpperCase() === "TODOS") throw new Error("'Todos' is a reserved name.");

			const { listName, tagName } = args;
			const response = DBcreateTag(listName, tagName);
			return response;
		},

		deleteTag(obj: unknown, args: { listName: string; tagName: string }) {
			if (args.tagName.toUpperCase() === "TODOS") throw new Error("'Todos' is a reserved name.");

			const { listName, tagName } = args;
			const response = DBdeleteTag(listName, tagName);
			return response;
		},

		modifyTag(obj: unknown, args: { listName: string; tagName: string; newTagName: string }) {
			if (args.tagName.toUpperCase() === "TODOS") throw new Error("'Todos' is a reserved name.");

			const { listName, newTagName, tagName } = args;
			const response = DBmodifyTag(listName, tagName, newTagName);
			return response;
		},

		reorderTags(obj: unknown, args: { listName: string; tags: string[] }) {
			const { listName, tags } = args;
			const response = DBreorderTags(listName, tags);
			return response;
		},
	},
};
