import { Schema, model, models } from 'mongoose';

export interface IProgressDays {
  year: number;
  days: string[];
}

const ProgressDaysSchema = new Schema<IProgressDays>({
  year: { type: Number, required: [true, 'A year is required'] },
  days: { type: [String], required: [true, 'Tell me the days you made a progress'] },
});

const ProgressDays = models.ProgressDays || model<IProgressDays>('ProgressDays', ProgressDaysSchema);

export { ProgressDays };
