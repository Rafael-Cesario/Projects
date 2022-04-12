import { connect } from "mongoose";
import "dotenv/config";

const connectDB = async (): Promise<void> => {
	connect(process.env.DATA_BASE!, () => console.log("Database is connect"));
};

connectDB();
export { connectDB };
