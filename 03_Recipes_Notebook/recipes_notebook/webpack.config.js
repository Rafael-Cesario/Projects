const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.tsx",
		about: "./src/about.tsx",
		sw: "./src/sw.ts",
	},

	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
	},

	// devServer: {
	// 	devMiddleware: {
	// 		index: true,
	// 		mimeTypes: { phtml: "text/html" },
	// 		publicPath: "/public",
	// 		serverSideRender: true,
	// 		writeToDisk: true,
	// 	},
	// },

	devtool: "inline-source-map",

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			title: "Recipes",
			chunks: ["index"],
			template: "src/templates/index.html",
		}),
		new HtmlWebpackPlugin({
			filename: "about.html",
			title: "About",
			chunks: ["about"],
			template: "src/templates/index.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "public"),
	},
};
