import bcripty from 'bcrypt';

export const encryptPassword = (password: string) => {
	const saltRounds = 10;
	const salt = bcripty.genSaltSync(saltRounds);
	const hash = bcripty.hashSync(password, salt);
	return hash;
};

export const decryptPassword = (encryptedPassword: string, password: string) => {
	const isSamePassword = bcripty.compareSync(password, encryptedPassword);
	return isSamePassword;
};
