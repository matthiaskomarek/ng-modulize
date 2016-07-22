var webpack = require('webpack');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		filename: 'build.js',
		path: 'tmp'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json']
	},
	resolveLoader: {
		modulesDirectories: ["node_modules"]
	},
	devtool: "source-map-inline",
	plugins: [
		new webpack.ProvidePlugin({
			moment: 'moment',
			'window.moment': 'moment'
		})
	],
	module: {
		loaders: [{test: /\.ts(x?)$/, loader: 'ts-loader'}]
	}
};