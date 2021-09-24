const {
	src,
	dest
} = require('gulp');
const webp = require('gulp-webp');

module.exports = function createWebp() {
  return src('source/img/**/*.{jpg,png}')
    .pipe(webp({quality: 90}))
    .pipe(dest('build/img'))
}
