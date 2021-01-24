const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());
}

function script() {
    return gulp.src('./app/js/src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./app/js/dist'))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./app/scss/**/*.scss', style);
    gulp.watch('./app/js/src/**/*.js', script);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./app/js/src/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.script = script;
exports.watch = watch;