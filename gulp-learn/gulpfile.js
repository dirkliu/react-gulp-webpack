var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var babel = require('gulp-babel')

 gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

 gulp.task("home", function () {
 	return gulp.src("src/home/**/*.js")
 		.pipe(babel())
 		.pipe(uglify())
 		.pipe(gulp.dest("dist/home"));
 })

 gulp.task("public", function () {
 	return gulp.src("src/public/**/*.js")
 		.pipe(babel())
 		.pipe(concat("public.min.js"))
 		.pipe(uglify())
 		.pipe(gulp.dest("dist/public"));
 })