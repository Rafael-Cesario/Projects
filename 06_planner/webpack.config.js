const path = require("path");

module.exports = {
	entry: "./src/index.tsx",

	devServer: {
		historyApiFallback: true,
	},

	module: {
		rules: [
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "public"),
		publicPath: "/",
	},
};
