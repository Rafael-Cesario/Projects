import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.cookies as { token: string };
  if (token) return res.status(200).json({ token: token });
  res.status(200).json({ message: 'no token' });
};
