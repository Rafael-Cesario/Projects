const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	resolve: {
		extensions: [".ts", ".js"],
	},

	plugins: [new HtmlWebpackPlugin({ title: "To Do App" })],

	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "public"),
		clean: true,
	},
};
