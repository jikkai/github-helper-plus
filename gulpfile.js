const gulp = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')

gulp.task('bundle', () => {
  return gulp.src('./src/index.ts')
    .pipe(webpackStream(require('./webpack.config'), webpack))
    .pipe(gulp.dest('./dist'))
})

gulp.task('move', () => {
  return gulp.src('./lib/**/**')
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
  const watcher = gulp.watch('./src/**/*', ['bundle'])

  watcher.on('change', (event) => {
    console.log(`File ${event.path} was ${event.type}, running tasks...`)
  })
})
