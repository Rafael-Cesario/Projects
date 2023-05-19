import { NextApiRequest, NextApiResponse } from 'next';

const getToken = (req: NextApiRequest, res: NextApiResponse) => {
	const token = req.cookies.token;
	res.send(token);
};
export default getToken;
