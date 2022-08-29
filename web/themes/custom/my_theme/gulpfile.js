const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
//const sass = require('sass');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const { src, series, parallel, dest, watch } = require('gulp');
const internal = require('stream');

const jsPath = 'src/assets/js/**/*.js';
const cssPath = 'src/assets/css/**/*.css';

function copyHtml() {
    return src('src/*html').pipe(gulp.dest('dist'));
}
//prodtask sass to css, minify & add autoprefixer;concat & uglify js
function compilescss() {
    return src('src/scss/*scss')
     .pipe(sass())
     .pipe(prefix())
     .pipe(minify())
     .pipe(dest('/dist/css'));
}

function jsmin() {
    return src('src/js/*.js')
     .pipe(terser())
     .pipe(prefix())
     .pipe(minify())
     .pipe(uglify())
     .pipe(dest('/dist/js'));
}

//devtask 
function jsTask() {
    return src(jsPath)
     .pipe(sourcemaps.init())
     .pipe(concat('all.js'))
     .pipe(terser())
     .pipe(sourcemaps.write('.'))
     .pipe(dest('dist/assets/js'));
}

function cssTask() {
    return src(cssPath)
     .pipe(sourcemaps.init())
     .pipe(concat('style.js'))
     .pipe(postcss([autoprefixer(), cssnano()]))
     .pipe(sourcemaps.write('.'))
     .pipe(dest('dist/assets/css'));
}

//watchtask
function watchtask() {
    watch(['src/scss/*.scss', 'src/js/*.js'], {interval: 1000}, parallel(compilescss,jsmin));
    watch([cssPath, jsPath], {interval: 1000}, parallel(jsTask, cssTask));
}

exports.default = series(parallel(compilescss,jsmin), parallel(jsTask, cssTask), watchtask);
const prodtask = series(compilescss,jsmin);
exports.prodtask = prodtask;
const devtask = series(jsTask, cssTask);
exports.devtask = devtask;
exports.watchtask = watchtask;
//exports.jsTask = jsTask;
//exports.copyHtml = copyHtml;

 

