'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var jsMinify = require('gulp-minify');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
	return gulp.src('./src/css/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch',function(){
	gulp.watch('./src/css/*.scss',['sass']);
});

gulp.task('minify-css',()=>{
	return gulp.src('./src/css/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('./production/css'));
});

gulp.task('minify-js',function(){
	gulp.src('./src/js/*.js')
	.pipe(jsMinify())
	.pipe(gulp.dest('./production/js'));
});

gulp.task('browser', ['sass'],function(){
	browserSync.init({
		server:"./"
	});

	gulp.watch("./src/css/*.scss", ['sass']).on('change',browserSync.reload);
	gulp.watch("*.html").on('change',browserSync.reload);
	gulp.watch("./src/js/*.js").on('change',browserSync.reload);
});