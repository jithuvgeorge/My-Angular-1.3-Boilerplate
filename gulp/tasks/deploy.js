'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['dev'], function() {

  return gulp.src('build/**/*')
    .pipe(ghPages());

});