import { ProgressDays } from '../models/progressDays';

type Query = {
  year: string;
};

export const DB_progressDays = async ({ year }: Query) => {
  try {
    const days = await ProgressDays.find({ year });
    return days;
  } catch (error) {
    return error.message;
  }
};
