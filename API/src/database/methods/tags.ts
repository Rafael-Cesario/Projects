import { Tags } from "../models/tags";

type Tag = {
	name: string;
	tags: string[];
};

type Tags = Tag[];

export const createNewTagOnDB = async (name: string, newTags: string[]) => {
	const allTags: Tags = await Tags.find({});
	const alreadyHasTag = allTags.some((tags) => tags.name === name);

	if (alreadyHasTag) return modifyTagsOnDB(name, newTags);

	const newTag = new Tags({ name, tags: newTags || [] });

	try {
		await newTag.save();
	} catch (error: any) {
		if (error.message.startsWith("Tags validation"))
			throw new Error("Incomplete Data: Name is required");

		throw new Error(error.message);
	}

	return newTag;
};

const modifyTagsOnDB = async (name: string, newTags: string[]) => {
	const allTags = (await Tags.findOne({ name })) as Tag;
	const tags = [...allTags.tags, ...newTags];

	try {
		await Tags.updateOne({ name: name }, { tags: tags });
		return await Tags.findOne({ name });
	} catch (error: any) {
		return error.message;
	}
};

export const allTagsOnDB = async () => {
	const allTags = await Tags.find({});
	return allTags;
};
