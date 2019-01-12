const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		'feed-view': './src/dist'
	},

	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			}
		]
	},

	plugins: [new UglifyJSPlugin()]
};
