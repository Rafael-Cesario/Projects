const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGODB_URL, {
		dbName: process.env.DB_NAME,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB is connected"))
	.catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => {
	console.log("Mongoose Connected to DB");
});

mongoose.connection.on("error", (error) => {
	console.log(error.message);
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose connection is disconnected");
});

process.on("SIGINT", async () => {
	await mongoose.connection.close();
	process.exit(0);
});
