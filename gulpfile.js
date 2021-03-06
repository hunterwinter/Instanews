var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var babel = require('gulp-babel');
// This is a very basic Gulp task,
// with a name and some code to run
// when this task is called:

gulp.task('default', [/*'uglify',*/'scss','babel', 'browser-sync']);

gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
        baseDir: './'
       }
   });
   gulp.watch('./src/*.js', ['babel']);
   gulp.watch('./src/*.scss', ['scss']);
   gulp.watch(['./build/**/*.*', 'index.html']).on('change', browserSync.reload);
});
	gulp.task('scss', function(){
		
		return gulp.src('./src/*.scss')
  .pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./build'));
});

  gulp.task('babel', () => {
    return gulp.src('./src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./build'));
});


	gulp.task('uglify', function(){
	return gulp.src('./src/*.js') // What files do we want gulp to consume?
        .pipe(uglify()) // Call the uglify function on these files
        .pipe(gulp.dest('./build')); // Where do we put the result?  
  });