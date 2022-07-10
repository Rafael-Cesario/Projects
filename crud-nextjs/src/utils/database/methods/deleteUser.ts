import { User } from "../models/user";

export const deleteUser = async (name: string) => {
	const regEx = new RegExp(name, "i");
	const user = await User.deleteOne({ name: regEx });

	if (user.deletedCount == 0) throw new Error("User not deleted");

	return user;
};
