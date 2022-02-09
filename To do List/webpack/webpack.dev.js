const { merge } = require("webpack-merge");
const common = require("../webpack.common");

module.exports = merge(common, {
	mode: "development",

	devServer: {
		static: "./src",
    compress: true,
    port: 3000,
	},
});
