const gulp  = require('gulp');
const nodemon = require('gulp-nodemon')
const config = require('./config.json')
const chalk = require('chalk')

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
        console.log(`restarting ${chalk.red(config.appName)}`)
        console.log(`author ${chalk.yellow(config.author)}`)
        console.log(`repository ${chalk.green(config.repository)}`)
    })
    .on('start',() => {
        console.log(`starting ${chalk.red(config.appName)} app`)
        console.log(`author ${chalk.yellow(config.author)}`)
        console.log(`repository ${chalk.green(config.repository)}`)
    })
})