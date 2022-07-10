import { User } from "../models/user";

export const allUsers = async () => {
	const users = await User.find({});
	return users;
};
