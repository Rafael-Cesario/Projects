import bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => {
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
};

export const decryptPassword = (hashPassword: string, password: string) => {
	const isSamePassword = bcrypt.compareSync(password, hashPassword);
	return isSamePassword;
};
