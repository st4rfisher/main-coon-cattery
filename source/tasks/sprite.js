const {
	src,
	dest
} = require('gulp');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');
const sync = require('browser-sync');

module.exports = function sprite() {
  return src('source/img/icons/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/img/icons'))
    .pipe(sync.stream());
}
