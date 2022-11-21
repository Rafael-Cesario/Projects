import path from "path";
import dotenv from "dotenv";

dotenv.config({
	path: path.resolve(__dirname, `../../${process.env.NODE_ENV?.trim()}.env`),
});

export default {
	environment: process.env.NODE_ENV,
	DBURL: process.env.DBURL,
};
