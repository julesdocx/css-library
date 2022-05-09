const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

const buildStyles = () => {
    return src("lib/**/*.scss")
        .pipe(sass())
        //.pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest("css"));
}

const watchTask = () => watch(["*/**/*.scss", '*html'], buildStyles);

exports.default = series(buildStyles, watchTask)
