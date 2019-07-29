var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

sass.compiler = require('node-sass')

 gulp.task("default", ['home', 'public']);

 gulp.task("home", ['homeHtml'], function () {
 	return gulp.src("src/home/**/*.js")
 		.pipe(babel())
 		.pipe(uglify())
 		.pipe(gulp.dest("dist/home"))
 })

 gulp.task('homeHtml', function () {
 	return gulp.src("src/home/**/*.html")
 		.pipe(gulp.dest("dist/home"))
 })

 gulp.task('sass', function () {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'));
});

 gulp.task("public", function () {
 	return gulp.src("src/public/**/*.js")
 		.pipe(babel())
 		.pipe(concat("public.min.js"))
 		.pipe(uglify())
 		.pipe(gulp.dest("dist/public"));
 })