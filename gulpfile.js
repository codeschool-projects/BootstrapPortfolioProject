// add functionality to compile sounds folder into dist build


'use strict';

var gulp = require('gulp'),

    sass = require('gulp-sass'), // sass converter
    autoprefixer = require('gulp-autoprefixer'), //adds vendor prefixes for css
    concat = require('gulp-concat'),
    del = require('del'), //for clean task
    imagemin = require('gulp-imagemin'), //minify images
    uglify = require('gulp-uglify'), //uglify
    usemin = require('gulp-usemin'), //minify code
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin'), //minify html
    browserSync = require('browser-sync'); //live reload


    gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/*.scss', ['sass']);
});
 //runs browsersync
gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      './css/*.css',
      './img/*.{png,jpg,gif}',
      './js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "./"
      }
   });

});

// Default task
gulp.task('default', ['browser-sync'], function() {
    gulp.start('sass:watch');
});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});
 //copy fonts
gulp.task('copyfonts', function() {
   gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof}*')
   .pipe(gulp.dest('./dist/fonts'));
});

// Images
gulp.task('imagemin', function() {
  return gulp.src('img/*.{svg,png,jpg,gif}')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'));
});
  //takes minified img for dist
gulp.task('usemin', function() {
  return gulp.src('./*.html')
  .pipe(flatmap(function(stream, file){
      return stream
        .pipe(usemin({
            css: [ rev() ],
            html: [ function() { return htmlmin({ collapseWhitespace: true })} ],
            js: [ uglify(), rev() ],
            inlinejs: [ uglify() ],
            inlinecss: [ cleanCss(), 'concat' ]
        }))
    }))
    .pipe(gulp.dest('dist/'));
});
//builds dist folder and cleans up old one
gulp.task('build',['clean'], function() {
    gulp.start('copyfonts','imagemin','usemin');
});

//added with udacity course
gulp.task('scripts-dist', function () {
  gulp.src('js/**/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

//added with udacity course - makes producrtion version (minified, linted, etc.)
gulp.task('dist', [
  'copy-html',
  'copy-images',
  'styles',
  'lint',
  'scripts-dist'
]);
