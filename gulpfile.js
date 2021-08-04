const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");
const csso = require("postcss-csso");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const rename = require("gulp-rename");
const del = require("del");
const concat = require("gulp-concat");
const uglifyes = require("uglify-es");
const composer = require("gulp-uglify/composer");
const uglify = composer(uglifyes, console);

// HTML
const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

// Styles
const styles = () => {
  return gulp.src("source/scss/styles.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(postcss([
      csso()
    ]))
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Scripts
const scripts = () => {
  return gulp.src("source/js/*.js")
    .pipe(plumber())
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("build/js/"))
    .pipe(uglify({
      mangle: false,
    }))
    .pipe(rename("scripts.min.js"))
    .pipe(gulp.dest("build/js/"))
    .pipe(sync.stream());
}

exports.scripts = scripts;

// Images
const optimizeImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.optimizeImages = optimizeImages;

const copyImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(gulp.dest("build/img"))
}

exports.copyImages = copyImages;

// WebP
const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.createWebp = createWebp;

// Sprite
const sprite = () => {
  return gulp.src("source/img/icons/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/icons"));
}

exports.sprite = sprite;

// Copy
const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/*.ico",
    "source/img/**/*.svg",
    "!source/img/icons/*.svg",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// Clean
const clean = () => {
  return del("build");
};

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    //browser: 'firefox',
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload
const reload = (done) => {
  sync.reload();
  done();
}

// Watcher
const watcher = () => {
  gulp.watch("source/scss/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/**/*.js", gulp.series(scripts));
  gulp.watch("source/img/icons/*.svg", gulp.series(sprite));
  gulp.watch("source/*.html", gulp.series(html, reload));
}

// Build
const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
);

exports.build = build;

// Start
exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  ));
