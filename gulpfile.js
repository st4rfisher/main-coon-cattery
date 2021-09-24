const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./source/tasks');

exports.clean = tasks.clean;
exports.copy = tasks.copy;
exports.imagesOptimization = tasks.images;
exports.html = tasks.html;
exports.styles = tasks.styles;
exports.scripts = tasks.scripts;
exports.sprite = tasks.sprite;
exports.createWebp = tasks.webp;
exports.copyImages = tasks.images;
exports.reload = tasks.reloading;
exports.server = tasks.server;
exports.watcher = tasks.watcher;

exports.default = gulp.series(
  exports.clean,
  exports.copy,
  exports.copyImages,
  gulp.parallel(
    exports.html,
    exports.styles,
    exports.scripts,
    exports.sprite,
    exports.createWebp
  ),
  gulp.series(
    exports.server,
    exports.watcher
  ));


exports.build = gulp.series(
  exports.clean,
  exports.copy,
  exports.imagesOptimization,
  gulp.parallel(
    exports.styles,
    exports.html,
    exports.scripts,
    exports.sprite,
    exports.createWebp
  ),
);

