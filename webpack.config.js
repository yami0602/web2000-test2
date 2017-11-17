const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'prod.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [new UglifyJSPlugin()],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9003,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
					},
				},
			},
		],
	},
};
