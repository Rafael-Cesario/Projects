import 'dotenv/config';

type TJwt = {
	secret: string;
	expiresIn: string;
};

export const jwtConfig: TJwt = {
	secret: process.env.JWTSECRET!,
	expiresIn: '1d',
};
