import { User } from '../models/user';

interface bodyData {
	name?: string;
	skill?: string;
	level?: number;
	xpHave?: number;
	xpNeed?: number;
	activeDays?: string[];
}

export const getData = async () => {
	const data = await User.findOne({});
	return data;
};

export const changeData = async (newData: bodyData) => {
	const changes = Object.entries(newData);

	changes.forEach((change) => {
		const [key, value] = change;
		User.findOneAndUpdate({});
	});
};
