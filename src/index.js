const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');

gulp.src('file.js')
    .pipe(javascriptObfuscator())
    .pipe(gulp.dest('../dist'));

