const gulp = require("gulp")
const cssmin = require("gulp-clean-css");
const stylus = require("gulp-stylus");
gulp.task("default", async function() {
  return gulp
    .src("./source/css/style.styl")
    .pipe(stylus())
    .pipe(cssmin())
    .pipe(gulp.dest("./source/css/"));
});
