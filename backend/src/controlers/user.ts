import { ObjectID } from 'bson';
import { User } from '../models/user';

interface bodyData {
	id: string;
	changes: {
		name?: string;
		skill?: string;
		level?: number;
		xpHave?: number;
		xpNeed?: number;
		activeDays?: string[];
	};
}

export const getData = async () => {
	const data = await User.findOne({});
	return data;
};

export const changeData = async (newData: bodyData) => {
	const changes = Object.entries(newData.changes);
	const user = await User.findById(newData.id);

	if (!user) {
		console.log('\nUser Not found, creating a new user');

		const newUser = new User({
			_id: newData.id,
			name: newData.changes.name,
			skill: newData.changes.skill,
		});

		newUser.save();

		console.log(newUser);
		return newUser;
	}

	console.log('\nUser found, applying changes');

	changes.forEach(async (change) => {
		const [key, value] = change;
		await User.findOneAndUpdate({ _id: newData.id }, { [key]: value }, { new: true });
	});

	return { message: 'User Updated' };
};
