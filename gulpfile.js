const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', gulp.series(watchFiles))

// FUNCTIONS
function htmlMin() {
    return gulp
        .src('src/index.html')
        .pipe(htmlmin(
            {
                collapseWhitespace: true
            }
        ))
        .pipe(gulp.dest('dist'));
}

function compileSass() {
    return gulp
        .src('src/sass/main.scss')
        .pipe(sass(
            {
                outputStyle: 'compressed'
            }
        ))
        .pipe(gulp.dest('dist/css/'))
}

// WATCH
function watchFiles() {
    gulp.watch('./src/index.html', htmlMin);
    gulp.watch('./src/sass/main.scss', compileSass);
}

// Exporting tasks
exports.htmlMin = htmlMin;
exports.compileSass = compileSass;