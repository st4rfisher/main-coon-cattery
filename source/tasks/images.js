const {
	src,
	dest
} = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function imagesOptimization() {
  return src('source/img/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.mozjpeg({progressive: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.svgo()
  ]))
  .pipe(dest('build/img'))
}

module.exports = function copyImages() {
  return src('source/img/**/*.{png,jpg,svg}')
    .pipe(dest('build/img'))
}

