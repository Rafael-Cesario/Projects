const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

module.exports = {
	entry: {
		index: "./src/index.tsx",
	},

	devServer: {
		historyApiFallback: true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
		],
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "SNotes",
			template: "./src/template/template.html",
		}),
		// provide plugin to skip the import React every time
		// new webpack.ProvidePlugin({
		// 	React: "react",
		// }),
	],

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "public"),
	},
};
