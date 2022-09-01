const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const { src, series, parallel, dest, watch, task } = require('gulp');
const babel = require('gulp-babel');

var clean = require('gulp-clean');

const jsPath = 'src/js/*.js';
const cssPath = 'src/scss/*.scss';


//prodtask sass to css, minify & add autoprefixer;concat & uglify js
function compileScss() {
    return src('src/scss/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(prefix())
     .pipe(minify())
     .pipe(dest('./dist/css'));
}
function cleanCssTask() {
    return gulp.src('dist/css/**/*')
        .pipe(clean({force: true}))
}

function jsMin() {
    return src('src/js/*.js')
     .pipe(minify())
     .pipe(uglify())
     .pipe(dest('./dist/js'));
}
function cleanJsTask() {
    return gulp.src('dist/js/**/*')
        .pipe(clean({force: true}))
}

//devtask 
function jsTask() {
    return src(jsPath)
     .pipe(sourcemaps.init())
     .pipe(babel({
        presets: ['@babel/env']
    }))
     .pipe(sourcemaps.write('.'))
     .pipe(dest('./dist/js'));
}

function cssTask() {
    return src(cssPath)
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(sourcemaps.write('.'))
     .pipe(dest('./dist/css'));
}

//watchtask
function watchtask() {
    watch([cssPath, jsPath], {interval: 1000}, parallel(jsTask, cssTask));
}

exports.delete = series(cleanCssTask, cleanJsTask);
exports.default = series(parallel(compileScss,jsMin), parallel(jsTask, cssTask), watchtask);
const prodtask = series(this.delete, compileScss, jsMin);
exports.prodtask = prodtask;
const devtask = series(jsTask, cssTask);
exports.devtask = devtask;
exports.watchtask = watchtask;
exports.jsTask = jsTask;
exports.cssTask = cssTask;
//exports.copyHtml = copyHtml;

 

