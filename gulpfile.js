/**
 * 
 * 
 */


/** require modules */
const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const babel =require('gulp-babel')
const concat = require('gulp-concat')
const htmlReplace = require('gulp-html-replace')
const htmlmin = require('gulp-htmlmin')
const cleanCss = require('gulp-clean-css')
const uglifyjs = require('gulp-uglifyjs')

//browser-sync and its reload
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('del:dev', () => {
    return del([
        './dev/**/*',
        '!./dev/README.md'
    ])
})

gulp.task('del', () => {
    return del([
        './www/**/*',
        '!./www/README.md'
    ])
})

gulp.task('img:dev', () => {
    return gulp.src('.src/img/**/*.*')
        .pipe(gulp.dest('./dev/img'))
        .pipe(reload({ stream: true }))
})

gulp.task('img', () => {
    return gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('./www/img'))
})

gulp.task('sass:dev', () => {
    return gulp.src('./src/style/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dev/css'))
        .pipe(reload({ stream: true }))
})

gulp.task('sass', () => {
    return gulp.src('./src/style/sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))
        .pipe(gulp.dest('./www/css'))
})

gulp.task('lib:dev', () => {
    return gulp.src('./src/lib/dev/**/*')
        .pipe('./dev/lib/')
})

gulp.task('lib:dev', () => {
    return gulp.src('./src/lib/dev/**/*')
        .pipe('./dev/lib/')
})

gulp.task('index:dev', () => {
    return gulp.src('./src/html/index.html')
        .pipe(gulp.dest('./dev'))
        .pipe(reload({ stream: true }))
})

gulp.task('index', () => {
    return gulp.src('./src/html/index.html')
        .pipe(htmlReplace({
            js: 'js/lib.min.js'
        }))
        .pipe(htmlmin())
        .pipe(gulp.dest('./www'))
})

gulp.task('html:dev', () => {
    return gulp.src(['./src/html/*.html', '!./src/html/index.html'])
        .pipe(gulp.dest('./dev/html'))
        .pipe(reload({ stream: true }))
})

gulp.task('html', () => {
    return gulp.src(['./src/html/*.html', '!./src/html/index.html'])
        .pipe(htmlReplace({
            js: 'js/lib.min.js'
        }))
        .pipe(htmlmin())
        .pipe(gulp.dest('./www/html'))
})


gulp.task('clean:dev', () => {
    return del([
        './dev/css/mixin.css'
    ])
})

gulp.task('clean', () => {
    return del([
        './www/css/mixin.css'
    ])
})

gulp.task('dev', [], () => {

})

gulp.task('build', [], () => {

})

gulp.task('watch', () => {
    gulp.watch('src/style/sass/*.scss', (e) => {
        console.log(`File ${e.path} was ${e.type}, running tasks...`)
    })
})