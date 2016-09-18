var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssgrace  = require('cssgrace');
var cssnext  = require('cssnext');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 3 version'],
            cascade: false,
            remove: false
        }),
        cssnext(),
        cssgrace
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});
gulp.task('watch', function(){
    gulp.watch('./src/css/*.css', ['css']);
});

gulp.task('default', ['watch', 'css']);
