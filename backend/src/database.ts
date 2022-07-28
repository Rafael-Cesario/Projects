import { connect } from 'mongoose';
import 'dotenv/config';

const URL = `${process.env.URL}/leveling-${process.env.NODE_ENV}`;

export const startDataBase = async () => {
	connect(URL!, () => console.log({ database: 'MongoDB connected' }));
};
