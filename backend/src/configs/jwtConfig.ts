/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'dotenv/config';

export const jwtConfig = {
	secret: process.env.JWTSECRET!,
	expiresIn: '1d',
};
