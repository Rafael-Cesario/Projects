import '../../utils/database/index';
import { NextApiRequest, NextApiResponse } from 'next';
import { DB_progressDays } from '../../utils/database/methods/progressDays';
import { DB_addDay } from '../../utils/database/methods/addDay';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const method = request.method;
  const query = request.query as { year: string };

  switch (method) {
    case 'GET': {
      const progressDays = await DB_progressDays(query);
      response.status(200).json({ progressDays });
      break;
    }

    case 'POST': {
      const body = JSON.parse(request.body);
      const progressDays = await DB_addDay(body);
      response.status(progressDays.status).json({ progressDays: progressDays.data });
      break;
    }

    default:
      return response.status(400).json({ message: 'Error, Method not detected' });
  }
};
