var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify-es').default;

function compressCSS(done) {
  gulp.src('./css/style.css')
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: 'compressed'}))
  .on('error', console.error.bind(console))
  .pipe(autoPrefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./css/'))
  done();
}

function compressJS(done) {    //Не работает! Не знаю почему
  gulp.src('./js/script.js')
  .pipe(uglify().on('error', function(e) {console.log(e);}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./js/'))
  done();
}

function watchAll() {
  gulp.watch('./css/style.css', gulp.series(compressCSS, browserReload));
  gulp.watch('./index.html', browserReload);
  gulp.watch('./js/script.js', gulp.series(compressJS, browserReload))
  gulp.watch('./img/**/*', browserReload);

}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: './'
    },
    notify: false,
    open: false,
    port: 3000
  });

  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

gulp.task('build', gulp.series(compressJS, compressCSS));
gulp.task('dev', gulp.parallel(sync, watchAll));
