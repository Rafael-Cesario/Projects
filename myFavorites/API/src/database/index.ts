import { connect } from "mongoose";
import config from "../config/index";
import "dotenv/config";

console.log(`Environment: ${config.environment}`);
const MongoDB = () => {
	connect(config.DBURL!, () => console.log("DataBase is connect"));
};

MongoDB();
