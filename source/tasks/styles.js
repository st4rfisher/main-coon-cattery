const {
	src,
	dest
} = require('gulp');
const sass = require('gulp-sass');
const bulk = require('gulp-sass-bulk-importer');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const sourcemap = require('gulp-sourcemaps');
const sync = require('browser-sync');

module.exports = function styles () {
  return src('source/scss/styles.scss')
  .pipe(sourcemap.init())
  .pipe(plumber())
  .pipe(bulk())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(clean({
    level: 2
  }))
  .pipe(concat('styles.min.css'))
  .pipe(sourcemap.write('.'))
  .pipe(dest('build/css/'))
  .pipe(sync.stream())
}


