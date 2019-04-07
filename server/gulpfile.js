const gulp  = require('gulp');
const nodemon = require('gulp-nodemon')
gulp.task('start',() => {
    nodemon({
        script: 'app.js'
    })
})