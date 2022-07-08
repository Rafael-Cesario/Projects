/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'dotenv/config';

const authConfig = {
  jwt: {
    secret: process.env.JWTSECRET!,
    expiresIn: '1d',
  },
};

export { authConfig };
