import { connect } from "mongoose";

const MongoDB = async () => {
	connect(process.env.DBURL, () => {
		console.log("DB Connected");
	});
};

MongoDB();
