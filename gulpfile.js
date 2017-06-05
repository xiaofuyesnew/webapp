/**
 * automatic working flow for fuqin project
 * 
 * @function 
 *      automatic compile sourse files to developing folder
 *      or building release files to www folder
 * 
 * @author allen wong
 * 
 * @date   2017-05-15
 * 
 * @last-monify  2017-05-17
 * 
 * @logs
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
const uglifyjs = require('gulp-uglify')

//browser-sync and its reload
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

/**
 * development part
 */
gulp.task('del:dev', () => {
    return del([
        './dev/**/*',
        '!./dev/README.md'
    ])
})

gulp.task('img:dev', () => {
    return gulp.src('./src/img/**/*.{png,jpg,gif}')
        .pipe(gulp.dest('./dev/img'))
        .pipe(reload({ stream: true }))
})

gulp.task('sass:dev', () => {
    return setTimeout(() => {
        gulp.src('./src/style/sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dev/css'))
            .pipe(reload({ stream: true }))
    }, 500) 
})

gulp.task('lib:dev', () => {
    return gulp.src('./src/lib-dev/**/*')
        .pipe(gulp.dest('./dev/lib/'))
        .pipe(reload({ stream: true }))
})

gulp.task('js:dev', () => {
    return gulp.src('./src/script/*.js')
        .pipe(gulpWebpack({
            entry: {
                index: './src/script/index.js'
            },
            output: {
                filename: '[name].js',
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    },
                    {
                        test: /\.css$/,
                        loader: 'style-loader!css-loader'
                    }
                ]
            }
        }))
        .pipe(gulp.dest('./dev/js'))
        .pipe(reload({ stream: true }))
})

gulp.task('index:dev', () => {
    return gulp.src('./src/html/index.html')
        .pipe(gulp.dest('./dev'))
        .pipe(reload({ stream: true }))
})

gulp.task('html:dev', () => {
    return gulp.src(['./src/html/*.html', '!./src/html/index.html'])
        .pipe(gulp.dest('./dev/html'))
        .pipe(reload({ stream: true }))
})

gulp.task('dev', ['img:dev',
        'lib:dev',
        'sass:dev',
        'js:dev',
        'index:dev',
        'html:dev',
        ], () => {
    browserSync.init({
        server: {
            baseDir: './dev'
        },
        notify: false
    })
    gulp.watch('./src/img/**/*.*', ['img:dev'])
    gulp.watch('./src/lib-dev/**/*.*', ['lib:dev'])
    gulp.watch('./src/style/sass/*.scss', ['sass:dev'])
    gulp.watch('./src/script/*.js', ['js:dev'])
    gulp.watch('./src/html/*.html', ['index:dev', 'html:dev'])
})
/** --- development end --- */

/**
 * build release files
 */
gulp.task('del', () => {
    return del([
        './www/**/*',
        '!./www/README.md'
    ])
})

gulp.task('img', () => {
    return gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./www/img'))
})

gulp.task('bundle', () => {
    return gulp.src('./src/lib/**/*.js')
        .pipe(concat('lib.min.js'))
        .pipe(uglifyjs())
        .pipe(gulp.dest('./www/js'))
})

gulp.task('js', () => {
    return gulp.src('./src/script/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglifyjs())
        .pipe(gulp.dest('./www/js'))
})

gulp.task('libcss', () => {
    return gulp.src('./src/lib/**/*.css')
        .pipe(cleanCss({
            advanced: false,
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('./www/css'))
})

gulp.task('sass', () => {
    return setTimeout(() => {
        gulp.src('./src/style/sass/*.scss')
            .pipe(sass({ outputStyle: 'compressed' })
                .on('error', sass.logError))
            .pipe(gulp.dest('./www/css'))
    }, 500)
})

gulp.task('index', () => {
    return gulp.src('./src/html/index.html')
        .pipe(htmlReplace({
            js: 'js/lib.min.js',
            css: 'css/mint-ui/style.css'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./www'))
})

gulp.task('html', () => {
    return gulp.src(['./src/html/*.html', '!./src/html/index.html'])
        .pipe(htmlReplace({
            js: 'js/lib.min.js',
            css: 'css/mint-ui/style.css'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./www/html'))
})

gulp.task('build', ['img', 'bundle', 'js', 'libcss', 'sass', 'index', 'html'])

/** --- release end --- */



