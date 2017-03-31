var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
var prefix = require('autoprefixer-stylus');


gulp.task('css', function() {
	return gulp.src('./src/puf.styl')
		.pipe(stylus({
			use: prefix()
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        host: "localhost",
        open: false,
        notify: false,
				port:8000
    });

    gulp.watch("./src/**/*.styl", ['css']);
    gulp.watch(["./dist/*.html","./dist/*.css"]).on('change', browserSync.reload);
});


gulp.task('default', ['css', 'serve']);
