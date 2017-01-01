/*
	Importing some useful stuff
	1. Concatenating and combining CSS (done)
	2. Optimizing Images
	3. Using gulp-watch
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
var cssnano = require('gulp-cssnano');
var notify = require('gulp-notify');
var del = require('del');
var imageMin = require('gulp-imagemin')

global.errorMessage = '';
/*
	Optimize styles
*/
gulp.task('styles', function(){
	gulp.src('css/*.css')
	    .pipe(cssnano())
	    .pipe(concat('style.min.css'))
	    .pipe(gulp.dest('dist/css'))
});
/*
	Compress Images
*/
gulp.task('images', function(){
	gulp.src('images/*.jpg')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(notify({ message: 'Images task complete' }));
});
gulp.task('watch', function(){
	gulp.watch('css',['styles']);
	gulp.watch('images/*.jpg',['images']);
});
gulp.task('default',['watch']);