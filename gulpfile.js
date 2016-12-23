/*
	Importing some useful stuff
	1. Concatenating and combining CSS (done)
	2. Using gulp-watch
*/
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var map = require("map-stream");
var livereload = require("gulp-livereload");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
global.errorMessage = '';

gulp.task('styles', function(){
	gulp.src('css/*.css')
	    .pipe(concat('style.min.css'))
	    .pipe(gulp.dest('css/'))
});
gulp.task('watch', function(){
	gulp.watch('css/*.css',['styles']);
});
gulp.task('default',['watch']);