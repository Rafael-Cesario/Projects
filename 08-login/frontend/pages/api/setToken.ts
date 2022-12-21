import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

const setToken = async (req: NextApiRequest, res: NextApiResponse) => {
	const { token } = req.body;

	res.setHeader(
		'Set-Cookie',
		cookie.serialize('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			maxAge: 60 * 60 * 24 * 7, // 1 week
			sameSite: 'strict',
			path: '/',
		})
	);

	res.send('New Token set');
};

export default setToken;
