import { connect } from "mongoose";
import "dotenv/config";

const connectDatabase = async (): Promise<void> => {
	connect(process.env.VERY_SECRET!, () => console.log("Database is connected"));
};

export { connectDatabase };
