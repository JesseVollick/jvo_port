var gulp         = require('gulp');
var watch        = require('gulp-watch');
var sass         = require('gulp-sass');
var prefix       = require('gulp-autoprefixer'); //LOOK THIS UP!!!
var plumber      = require('gulp-plumber');
var uglify       = require('gulp-uglify');
// var pump         = require('pump');
var rename       = require("gulp-rename");
// var imagemin     = require("gulp-imagemin");
// var pngquant     = require('imagemin-pngquant');


/**
*
* Styles
* - Compile
* - Compress/Minify
* - Catch errors (gulp-plumber)
* - Autoprefixer
*
**/

gulp.task('sass', function() {
  gulp.src('app/**/*.sass')
  // .pipe(watch('src/sass/*.scss'))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
  .pipe(plumber())
  .pipe(gulp.dest('app/'));
});

// uglify your scripts!!!

gulp.task('scripts', function() {
  gulp.src('app/js/*.js')
  .pipe(uglify())
  .pipe(rename({
    suffix:".min",
  }))
  .pipe(gulp.dest(''));
});

//keep and eye on them!!

gulp.task('default', ['sass', 'scripts'], function () {
  gulp.watch('app/**/*.sass', ['sass']);
  gulp.watch('app/js/*.js', ['scripts']);
});
