import { User } from '../models/user';

export const getData = async () => {
	const data = await User.findOne({});
	return data;
};
