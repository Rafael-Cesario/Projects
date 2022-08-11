import 'dotenv/config';

export const jwtConfig = {
	secret: process.env.JWTSECRET!,
	expiresIn: '1d',
};
