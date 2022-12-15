import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const generateToken = (email: string) => {
	const SECRET = process.env.SECRET!;
	const expiresIn = 20;
	const token = jwt.sign({ email }, SECRET, { expiresIn });
	return token;
};

export const verifyToken = (token: string) => {
	try {
		const decoded = jwt.verify(token, process.env.SECRET!);
		return decoded;
	} catch (error: any) {
		return error.message;
	}
};
