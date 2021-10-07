const {
	src,
	dest
} = require('gulp');

module.exports = function copy(done) {
  src([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/img/**/*.svg',
    '!source/img/icons/*.svg',
  ], {
    base: 'source'
  })
    .pipe(dest('build'))
  done();
}
