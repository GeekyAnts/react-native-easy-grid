const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const eslint = require('gulp-eslint');
const watch = require('gulp-watch');
const filePaths = ['./Utils/**/*.js', './Components/**/*.js'];

gulp.task('lint', () =>
  gulp.src(filePaths)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError('Lint error: <%= error.message %>'))
);

gulp.task('default', ['lint'], () => {
  watch(filePaths, () => gulp.start(['lint']));
});
