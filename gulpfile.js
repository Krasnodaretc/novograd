var gulp = require('gulp'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    concat = require("gulp-concat");
    autoprefixer = require('gulp-autoprefixer');

gulp.task("default", ["sass", "js"]);

gulp.task("sass", function () {
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