var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
var prefix = require('autoprefixer-stylus');


gulp.task('css', function() {
	return gulp.src('./puf.styl')
		.pipe(stylus({
			use: prefix()
		}))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        },
        host: "localhost",
        open: false,
        notify: false
    });

    gulp.watch("./**/*.styl", ['css']);
    gulp.watch(["./*.html","./*.css"]).on('change', browserSync.reload);
});


gulp.task('default', ['css', 'serve']);
