var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
// var purgecss = require('gulp-purgecss');

gulp.task('style', function () {
    var tailwindcss = require('tailwindcss');

    return gulp
        .src('sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
        ]))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./'));
});


//Watch task
gulp.task('default', function () {
    gulp.watch('sass/**/*.scss', gulp.series('style'));
    gulp.watch('tailwind.config.js', gulp.series('style'));
});

