import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const generateToken = () => {
	const SECRET = process.env.SECRET!;
	const token = jwt.sign({}, SECRET);
	return token;
};
