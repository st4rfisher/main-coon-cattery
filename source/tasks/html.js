const {
	src,
	dest
} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sync = require('browser-sync');

module.exports = function html() {
  return src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build'))
}

