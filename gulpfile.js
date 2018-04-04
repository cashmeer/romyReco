var gulp = require('gulp'), sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');


var sassConfig = {
	inputDirectory: 'css/*.scss',
	outputDirectory: 'assets/css',
	options: {
		outputStyle: 'expanded'
	}
}

gulp.task('build-css', function() {
	return gulp
		.src(sassConfig.inputDirectory)
		.pipe(sass(sassConfig.options).on('error', sass.logError))
		.pipe(gulp.dest(sassConfig.outputDirectory))
});

gulp.task('coffee', function() {
  gulp.src('js/*.coffee')
  .pipe(coffee({bare: true})
    .on('error', gutil.log))
  .pipe(gulp.dest('assets/js'))
});

gulp.task('watch', function() {
	gulp.watch('css/*.scss', ['build-css']);
	gulp.watch('js/*.coffee', ['coffee']);
});