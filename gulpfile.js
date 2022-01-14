const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const nunjucks = require('gulp-nunjucks');

//sass

function css() {
    return gulp.src('./sass-test/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'));
};

exports.css = css;

// templater

function njk() {
    return gulp.src('./sass-test/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('./build/dist'));
};

exports.njk = njk;

function watch(){
    gulp.watch('./sass-test/**/*.html', njk);
    gulp.watch('./sass-test/sass/**/*.scss', css);
}

exports.default = gulp.series(njk, css, watch);