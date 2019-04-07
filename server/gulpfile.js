const gulp  = require('gulp');
const nodemon = require('gulp-nodemon')
const config = require('./config.json')

gulp.task('default',() => {
    nodemon({
        script: 'app.js',
        ext:'js',
        env:{
            PORT : 4848
        },
        ignore : ['./node_modules/**']
    })
    .on('restart',() => {
        console.log(`restarting ${config.appName}`)
    })
    .on('start',() => {
        console.log(`starting app ${config.appName} `)
        console.log(`repository ${config.repository} `)
        console.log(`author ${config.author} `)
    })
})