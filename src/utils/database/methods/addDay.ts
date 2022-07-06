import { IProgressDays, ProgressDays } from '../models/progressDays';

type reqBody = { year: number; days: string[] };

interface AddDay {
  status: number;
  data: IProgressDays | { message: string };
}

export const DB_addDay = async ({ year, days }: reqBody): Promise<AddDay> => {
  try {
    if (!year || !days) throw new Error('A key is missing');

    const progressDaysOnDb = await ProgressDays.findOneAndUpdate({ year }, { days }, { new: true });

    if (!progressDaysOnDb) {
      const progressDay = new ProgressDays({ year, days });
      progressDay.save();
      return { status: 200, data: progressDay };
    }

    return { status: 200, data: progressDaysOnDb };
  } catch (error) {
    return { status: 404, data: { message: error.message } };
  }
};
