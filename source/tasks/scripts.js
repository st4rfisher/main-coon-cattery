const {
	src,
	dest
} = require('gulp');
const sync = require('browser-sync');
const webpack = require('webpack-stream');

module.exports = function scripts() {
	return src('source/js/main.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
          }
        ]
      },
      mode: 'production'
    }))
    .pipe(dest('build/js/'))
    .pipe(sync.stream());
}
