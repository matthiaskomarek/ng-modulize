/**
 * @name
 * @author Matthias Komarek <matthias@mkomarek.de>
 * @copyright Matthias Komarek 2016
 * @date 22.07.16 19:57
 */

var webpack = require('webpack');
var fs = require('fs');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		filename: 'build.js',
		path: 'dist'
	},
	// exclude all none relative paths
	externals: /^[^.]/,
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json']
	},
	resolveLoader: {
		modulesDirectories: ['node_modules']
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin(
			{
				warning: false,
				mangle: true,
				comments: false
			}
		)
	],
	module: {
		loaders: [{test: /\.ts(x?)$/, loaders: ['ts-loader', 'ng-annotate']}]
	}
};