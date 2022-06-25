import { ListModel } from "../../models/lists";

type DeleteList = { name: string; deletedCount: number };

export const DBdeleteList = async (name: string): Promise<DeleteList> => {
	try {
		const { deletedCount } = await ListModel.deleteOne({ name });

		if (!deletedCount) throw new Error(`No list with this name.`);

		return { name, deletedCount };
	} catch (error: any) {
		throw new Error(error.message);
	}
};
