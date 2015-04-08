var gulp = require('gulp');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
 
gulp.task('css', function() {
    return gulp.src([
    		'assets/css/semantic.css',
    		'assets/css/flickity.css',
    		'assets/css/style.css'
    	])
        .pipe(concat('main.css'))
        .pipe(csso())
        .pipe(gulp.dest('assets/css/'));
});
gulp.task('js', function() {
    return gulp.src([
    		'assets/js/transition.js',
    		'assets/js/sidebar.js',
    		'assets/js/dimmer.js',
    		'assets/js/modal.js',
    		'assets/js/skrollr.min.js',
    		'assets/js/skrollr.menu.min.js',
    		'assets/js/flickity.pkgd.min.js',
    		'assets/js/script.js'
    	])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));    
});

gulp.task('html', function() {
    return gulp.src('index.src.html')
        .pipe(htmlreplace({
        	'css': 'assets/css/main.css',
        	'js': 'assets/js/main.js',
        }))
        .pipe(gulp.dest('dist'));    
});

gulp.task('default', ['css', 'js', 'html']);