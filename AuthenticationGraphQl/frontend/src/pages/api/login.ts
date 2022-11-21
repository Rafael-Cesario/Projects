import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body as { token: string };
  res.setHeader(
    'set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: 'strict',
      path: '/',
    })
  );

  res.statusCode = 200;
  res.json({ success: true });
};
