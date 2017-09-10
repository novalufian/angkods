const 
	gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('styles', ()=>{
	return gulp.src('sass/angkods.scss')
	  .pipe(sass(''))
	  .pipe(gulp.dest('./css'));
})

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default',['styles']);
