const path = require('path');

module.exports = {
	entry: {
		calculator: path.join(__dirname + '/src/loanCalculator.ts'),
		quick: path.join(__dirname + '/src/quickLoan.ts'),
		mortgage: path.join(__dirname + '/src/mortgageLoan.ts'),
		personal: path.join(__dirname + '/src/personalLoan.ts')
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};
