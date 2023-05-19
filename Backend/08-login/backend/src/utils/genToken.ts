import 'dotenv/config';
import jsonwebtoken from 'jsonwebtoken';

export const genToken = (email: string) => {
	const secret = process.env.SECRET!;
	const expiresIn = 1 * 60 * 60 * 24 * 7; // 1 week;

	const token = jsonwebtoken.sign({ email }, secret, { expiresIn });
	return token;
};

export const verifyToken = () => {};
