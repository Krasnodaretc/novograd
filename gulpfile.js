var gulp = require('gulp'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    concat = require("gulp-concat");
    autoprefixer = require('gulp-autoprefixer');

gulp.task("default", ["sass-dev", "js", "html", "png"]);

gulp.task("sass-dev", function () {
   gulp.src("./style/**/*.scss")
       .pipe(sass().on('error', sass.logError))
       .pipe(concat("main.css"))
       .pipe(cssnano())
       .pipe(autoprefixer({
           browsers: '> 5%'
       }))
       .pipe(gulp.dest('./build/css'));
});


gulp.task("js", function () {
   gulp.src("./public/js/**/*.js")
       .pipe(concat("main.js"))
       .pipe(babel())
       .pipe(gulp.dest("./build/js"))
});


gulp.task("html", function () {
    gulp.src("./views/*.html")
        .pipe(gulp.dest("./build/"))
});


gulp.task("png", function () {
   gulp.src("./public/img/**/*.png")
       .pipe(gulp.dest("./build/img/"))
});

gulp.task('watch', function () {
    gulp.watch("./style/**/*.scss", ['sass-dev']);
    gulp.watch("./public/js/**/*.js", ['js']);
    gulp.watch("./views/*.html", ['html']);
});