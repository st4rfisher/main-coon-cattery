const {
	watch,
  series
} = require('gulp');

module.exports = function watcher() {
  watch('source/img/**/*.+(png|jpg|jpeg)', series('imagesOptimization'));
  watch('source/img/icons/*.svg', series('sprite'));
  watch('source/js/**/*.js', series('scripts'));
  watch('source/scss/**/*.scss', series('styles'));
  watch('source/*.html', series('html', 'reload'));
}
